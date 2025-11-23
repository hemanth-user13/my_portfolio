import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export default function ChatbotEnhanced() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: "Hi! I'm HemanthAI, your digital assistant. I know everything about Hemanth's skills, projects, and experience. What would you like to know? 🚀",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const knowledgeBase = {
    skills: {
      frontend: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
      backend: ['Django', 'REST API', 'Python'],
      database: ['PostgreSQL', 'MySQL'],
      tools: ['Git', 'Docker', 'VS Code', 'Postman'],
    },
    projects: [
      {
        name: 'E-Commerce Platform',
        tech: ['React', 'Django', 'PostgreSQL'],
        description: 'Full-featured e-commerce with payment integration',
      },
      {
        name: 'Task Management App',
        tech: ['React', 'Redux', 'Django REST'],
        description: 'Collaborative task manager with real-time updates',
      },
      {
        name: 'Social Media Dashboard',
        tech: ['React', 'Django', 'Chart.js'],
        description: 'Analytics dashboard with data visualization',
      },
    ],
    experience: 'Hemanth is an expert Full Stack Developer with deep knowledge in React and Django. He specializes in building scalable web applications with clean architecture.',
    contact: 'You can reach Hemanth at hemanth@example.com or connect on LinkedIn and GitHub. Use the contact form on this page to send a message!',
    education: 'Hemanth has multiple certifications in React, Django, Python, and full-stack development from platforms like Udemy and Coursera.',
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getSmartResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('built')) {
      const project = knowledgeBase.projects[0];
      return `Great question! One of Hemanth's best projects is the "${project.name}" - ${project.description}. It's built using ${project.tech.join(', ')}. Would you like to see the live demo or GitHub repo? 🚀`;
    }

    if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('know')) {
      return `Hemanth is a Full Stack wizard! 🧙‍♂️\n\n**Frontend:** ${knowledgeBase.skills.frontend.join(', ')}\n**Backend:** ${knowledgeBase.skills.backend.join(', ')}\n**Database:** ${knowledgeBase.skills.database.join(', ')}\n**Tools:** ${knowledgeBase.skills.tools.join(', ')}\n\nWhich area interests you most?`;
    }

    if (lowerMessage.includes('react')) {
      return `Hemanth is a React expert! ⚛️ He's built multiple production apps using React, Redux, and modern hooks. His React projects include ${knowledgeBase.projects.map(p => p.name).join(', ')}. Want to dive into any specific project?`;
    }

    if (lowerMessage.includes('django')) {
      return `Django is Hemanth's backend superpower! 🐍 He builds robust REST APIs with Django REST Framework, handles authentication, database optimization, and deployment. His Django experience shines in projects like the E-Commerce Platform and Task Management App.`;
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return knowledgeBase.contact;
    }

    if (lowerMessage.includes('experience') || lowerMessage.includes('about')) {
      return knowledgeBase.experience + '\n\nHe has solved 500+ LeetCode problems, contributed to open source, and holds multiple certifications. Pretty impressive, right? 💪';
    }

    if (lowerMessage.includes('hire') || lowerMessage.includes('available') || lowerMessage.includes('job')) {
      return `Hemanth is open to exciting opportunities! He's looking for roles where he can build impactful products using React and Django. Feel free to reach out via the contact form or email. Let's build something amazing together! 🚀`;
    }

    if (lowerMessage.includes('github') || lowerMessage.includes('code')) {
      return `Check out Hemanth's GitHub profile! He has 50+ repositories with clean, well-documented code. You'll find projects ranging from web apps to API integrations. Link is in the Profiles section! 💻`;
    }

    if (lowerMessage.includes('certification') || lowerMessage.includes('education')) {
      return knowledgeBase.education + ' He believes in continuous learning and staying updated with the latest tech trends! 📚';
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hey there! 👋 I'm HemanthAI, and I'm here to tell you all about Hemanth's amazing work. What would you like to explore first - his projects, skills, or experience?";
    }

    return `Interesting question! I can tell you about:\n\n🚀 Hemanth's **projects** and what he's built\n💻 His **technical skills** (React, Django, etc.)\n📧 How to **contact** him\n🎯 His **experience** and background\n💼 **Hiring** opportunities\n\nWhat would you like to know?`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      type: 'user',
      text: input,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        type: 'bot',
        text: getSmartResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const quickActions = [
    'Tell me about projects',
    'What are your skills?',
    'How to contact?',
    'Are you available for hire?',
  ];

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 group"
        >
          <MessageCircle size={28} />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          <Sparkles
            size={16}
            className="absolute -top-2 -left-2 text-yellow-300 animate-bounce"
          />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl relative">
                🤖
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-white font-semibold">HemanthAI</h3>
                <p className="text-blue-100 text-xs">Your AI Assistant • Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 p-4 space-y-4 max-h-96 overflow-y-auto bg-slate-50 dark:bg-slate-900">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-br-none'
                      : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-none shadow-md'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.type === 'user' ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-bl-none p-3 shadow-md">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 py-2 bg-white dark:bg-slate-800 border-t dark:border-slate-700">
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Quick actions:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInput(action);
                      setTimeout(() => handleSend(), 100);
                    }}
                    className="text-xs px-3 py-1 bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-slate-600 transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 border-t dark:border-slate-700 bg-white dark:bg-slate-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
