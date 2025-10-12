import React, { useState } from 'react';
import { FiChevronLeft, FiChevronDown, FiChevronRight, FiUsers, FiActivity, FiMail, FiSettings, FiShield, FiExternalLink } from 'react-icons/fi';

const HelpPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleBack = () => {
    window.location.href = '#/more';
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const helpSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <FiActivity className="w-5 h-5" />,
      items: [
        {
          question: 'How do I create an account?',
          answer: 'Click "Get Started" on the welcome screen, verify your email, and complete the signup form with your username, email, and password.'
        },
        {
          question: 'How do I add friends?',
          answer: 'Go to the Friends page and use the search feature to find users by username or display name. Send friend requests to connect.'
        },
        {
          question: 'How do I reset my password?',
          answer: 'On the login page, click "Forgot Password" and enter your username or email. Follow the OTP verification process to reset your password.'
        }
      ]
    },
    {
      id: 'features',
      title: 'Features & Analytics',
      icon: <FiActivity className="w-5 h-5" />,
      items: [
        {
          question: 'How do leaderboards work?',
          answer: 'Leaderboards show your browsing activity compared to friends. You can see daily, weekly, and monthly rankings based on browsing time and activity.'
        },
        {
          question: 'Can I see what my friends are browsing?',
          answer: 'You can see general browsing statistics and activity of your friends, respecting their privacy settings.'
        }
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: <FiShield className="w-5 h-5" />,
      items: [
        {
          question: 'Can I control what others see?',
          answer: 'Yes! Go to Settings to configure privacy levels for your profile, browsing activity, and personal information.'
        },
        {
          question: 'How do I delete my account?',
          answer: 'Contact support through our website or email. We will help you permanently delete your account and all associated data.'
        }
      ]
    },
    {
      id: 'messaging',
      title: 'Messaging & Communication',
      icon: <FiMail className="w-5 h-5" />,
      items: [
        {
          question: 'How do I send messages?',
          answer: 'Go to the Inbox page and select a friend to start a conversation. You can send text messages and share browsing insights.'
        },
        {
          question: 'Do I get notifications for messages?',
          answer: 'Yes, you will receive notifications for new messages, friend requests, and other important updates.'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <FiSettings className="w-5 h-5" />,
      items: [
        {
          question: 'Extension not working properly?',
          answer: 'Try refreshing the extension by clicking the refresh button in the top bar, or restart your browser. Make sure you have the latest version installed.'
        },
        {
          question: 'Not seeing browsing data?',
          answer: 'Make sure the extension has permissions to access your browsing data. Check that you are actively browsing and the extension is enabled.'
        },
        {
          question: 'Friends not showing up?',
          answer: 'Check your internet connection and try refreshing. Make sure your friends have accepted your friend requests.'
        }
      ]
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 bg-white">
        <div className="flex items-center space-x-3">
          <button
            onClick={handleBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FiChevronLeft size={20} className="mr-1" />
            <span className="text-sm font-medium">Back</span>
          </button>
          
          <div className="flex-1">
            <h1 className="text-lg font-bold text-gray-800">Help & Support</h1>
            <p className="text-sm text-gray-600">Get help and find answers</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Quick Actions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-blue-800 mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => window.open('https://browseping.com', '_blank')}
              className="flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <FiExternalLink className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Visit Website</span>
            </button>
            <button 
              onClick={() => window.location.href = '#/about'}
              className="flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <FiUsers className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">About BrowsePing</span>
            </button>
          </div>
        </div>

        {/* FAQ Sections */}
        {helpSections.map((section) => (
          <div key={section.id} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="text-blue-600">{section.icon}</div>
                <span className="font-medium text-gray-800">{section.title}</span>
              </div>
              {expandedSection === section.id ? (
                <FiChevronDown className="w-5 h-5 text-gray-600" />
              ) : (
                <FiChevronRight className="w-5 h-5 text-gray-600" />
              )}
            </button>
            
            {expandedSection === section.id && (
              <div className="p-4 bg-white space-y-4">
                {section.items.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-medium text-gray-800 mb-2">{item.question}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Contact Support */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-6">
          <h3 className="font-semibold text-gray-800 mb-3">Still Need Help?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Can't find what you're looking for? Our team is here to help you.
          </p>
          <div className="space-y-2">
            <button 
              onClick={() => window.open('https://browseping.com', '_blank')}
              className="w-full flex items-center justify-center space-x-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <FiExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Contact Support</span>
            </button>
            <div className="text-center">
              <p className="text-xs text-gray-500">
                or email us at support@browseping.com
              </p>
            </div>
          </div>
        </div>

        {/* Version Info */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-400">
            BrowsePing v1.0.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;