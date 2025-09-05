interface MessageNotificationPayload {
  senderId: string;
  senderName: string;
  content: string;
  conversationId: string;
  messageId: string;
}

export async function handleNewMessageNotification(payload: MessageNotificationPayload) {
  const { user } = await chrome.storage.local.get('user');
  if (!user) return;

  const parsedUser = JSON.parse(user);
  
  if (payload.senderId === parsedUser.id) return;

  if (!chrome.notifications) {
    console.warn('[NotificationService] Notifications API not available');
    return;
  }

  // Truncate long messages
  const truncatedMessage = payload.content.length > 80 
    ? payload.content.substring(0, 80) + '...' 
    : payload.content;

  chrome.notifications.create(`message-${payload.messageId}`, {
    type: 'basic',
    iconUrl: chrome.runtime.getURL('icons/icon128.png'),
    title: `New message \n${payload.senderName}`,
    message: truncatedMessage,
    priority: 1,
  }, (notificationId) => {
    if (chrome.runtime.lastError) {
      console.error('[NotificationService] Message notification creation failed:', chrome.runtime.lastError);
    } else {
      console.log(`[NotificationService] Message notification created: ${notificationId}`);
    }
  });
}