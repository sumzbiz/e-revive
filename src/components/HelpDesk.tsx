import React, { useState, useEffect } from 'react';
import { Send, Minimize2, MessageSquare } from 'lucide-react';

// Define the animation CSS as a string
const animationStyles = `
  @keyframes bounceIn {
    0% {
      transform: scale(0.3) translateY(100px);
      opacity: 0;
    }
    50% {
      transform: scale(1.05) translateY(-10px);
      opacity: 1;
    }
    70% {
      transform: scale(0.9) translateY(5px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }
  .animate-bounce-in {
    animation: bounceIn 0.6s ease-out forwards;
  }
`;

export default function HelpDesk() {
  const [isChatMinimized, setIsChatMinimized] = useState(true);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([]);
  const [inputText, setInputText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Inject the animation styles once
    const styleElement = document.createElement('style');
    styleElement.innerHTML = animationStyles;
    document.head.appendChild(styleElement);

    // Start animation when component mounts
    setIsAnimating(true);
    
    // After 500ms, set animating to false to settle the icon
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => {
      clearTimeout(timer);
      // Remove the style element when component unmounts
      document.head.removeChild(styleElement);
    };
  }, []);

  const toggleChat = () => {
    setIsChatMinimized(!isChatMinimized);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    // Add user message
    const newMessages = [...messages, {text: inputText, isUser: true}];
    setMessages(newMessages);
    setInputText('');
    
    // Simulate response (this would be replaced with Gemini API call)
    setTimeout(() => {
      setMessages([...newMessages, {
        text: "I'm your e-revive Help Desk assistant. How can I help you today?",
        isUser: false
      }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickActions = [
    "Check my repair status",
    "Schedule pickup",
    "View my sustainability impact"
  ];

  // Animation classes for the icon
  const animationClasses = isAnimating 
    ? 'animate-bounce-in' 
    : '';

  return (
    <div className={`fixed bottom-16 sm:bottom-20 right-4 sm:right-6 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-300 ${
      isChatMinimized 
        ? 'w-12 h-12 sm:w-16 sm:h-16 p-0 flex items-center justify-center' 
        : 'w-full sm:w-80 md:w-96 p-3 sm:p-4 max-w-full'
      }`}
    >
      {isChatMinimized ? (
        <button 
          onClick={toggleChat}
          className={`bg-primary-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors ${animationClasses}`}
          aria-label="Open help desk"
        >
          <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      ) : (
        <>
          <div className="flex justify-between items-center mb-2 cursor-move">
            <h2 className="text-base sm:text-lg font-bold text-primary-500">Help Desk</h2>
            <button 
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Minimize help desk"
            >
              <Minimize2 className="icon-sm" />
            </button>
          </div>
          <p className="text-fluid-base text-gray-600 mb-2 sm:mb-3">Our Help Desk can assist you with tracking your recycling and repair progress, navigating platform features, and answering common questions.</p>
          
          <div className="chat-window h-48 sm:h-60 overflow-y-auto mb-2 sm:mb-3 p-2 bg-gray-50 rounded-md">
            {messages.length === 0 ? (
              <div className="flex flex-col gap-2">
                <p className="text-fluid-base text-gray-500 italic">How can I help you today?</p>
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputText(action);
                      setMessages([...messages, {text: action, isUser: true}]);
                      setTimeout(() => {
                        setMessages(prev => [...prev, {
                          text: `Here's information about "${action}". What else would you like to know?`,
                          isUser: false
                        }]);
                      }, 1000);
                    }}
                    className="text-fluid-base text-primary-500 bg-white p-2 rounded-md shadow-sm hover:bg-gray-100 text-left"
                  >
                    {action}
                  </button>
                ))}
              </div>
            ) : (
              messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`mb-2 p-2 rounded-lg ${
                    msg.isUser 
                    ? 'bg-primary-100 text-gray-800 ml-auto max-w-[75%]' 
                    : 'bg-white text-gray-800 mr-auto max-w-[75%] border border-gray-200'
                  }`}
                >
                  <p className="text-fluid-base">{msg.text}</p>
                </div>
              ))
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Type a message..." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-1.5 sm:py-2 text-fluid-base"
            />
            <button 
              onClick={handleSendMessage}
              className="btn btn-primary p-1.5 sm:p-2 rounded-full"
              aria-label="Send message"
            >
              <Send className="icon-sm" />
            </button>
          </div>
        </>
      )}
    </div>
  );
} 