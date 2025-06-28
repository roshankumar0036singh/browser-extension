import { getWebSocket } from "./websocket";

export function tabTracing() {
    chrome.tabs.onCreated.addListener((tab) => {
        console.log(`[TabTracking] Tab created - ID: ${tab.id}, Title: ${tab.title}, URL: ${tab.url}`);
        publishAllTabs();
    });

    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status === 'complete') {
            console.log(`[TabTracking] Tab updated - ID: ${tab.id}, Title: ${tab.title}, URL: ${tab.url}`);
            publishAllTabs();
            publishActiveTab();
        }
    });

    chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
        console.log(`[TabTracking] Tab removed - ID: ${tabId}`);
        publishAllTabs();
    });

    chrome.tabs.onActivated.addListener(async (activeInfo) => {
        const activatedTab = await chrome.tabs.get(activeInfo.tabId);
        console.log(`[TabTracking] Tab activated ID: ${activatedTab.id}, Title: ${activatedTab.title}, URL: ${activatedTab.url}`);
        publishActiveTab();
    });
}


export async function publishAllTabs() {
    const ws = getWebSocket();
    if (!ws || ws.readyState !== WebSocket.OPEN) return;

    const userId = await getCurrentUserId();
    if (!userId) return;

    const tabs = await chrome.tabs.query({});
    const tabData = tabs.map(tab => ({
        id: tab.id,
        title: tab.title,
        url: tab.url
    }));

    ws.send(JSON.stringify({
        type: 'all_tabs_update',
        userId,
        tabs: tabData
    }));
    console.log('[TabTracking] Published all tabs: ', tabData);
}

export async function publishActiveTab() {
    const ws = getWebSocket();
    if (!ws || ws.readyState !== WebSocket.OPEN) return;

    const userId = await getCurrentUserId();
    if (!userId) return;

    const activeTab = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!activeTab) return;

    ws.send(JSON.stringify({
        type: 'active_tab_update',
        userId,
        tab: {
            id: activeTab[0].id,
            userId,
            title: activeTab[0].title,
            url: activeTab[0].url,
        }
    }))
}

async function getCurrentUserId() {
    const { user } = await chrome.storage.local.get('user');
    if (!user) return null;
    try {
        const parsedUser = JSON.parse(user);
        return parsedUser.id || null;
    } catch {
        return null;
    }
}