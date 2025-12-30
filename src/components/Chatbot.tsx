import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  type: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hi! I'm Hemanth's assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const faqs: Record<string, string> = {
    technologies:
      "Hemanth specializes in React, Django, REST APIs, JavaScript, Python, HTML, CSS, Tailwind CSS, and Bootstrap. He also works with PostgreSQL and MySQL databases.",
    projects:
      "Check out the Projects section above to see Hemanth's best work, including e-commerce platforms, task management apps, and social media dashboards.",
    contact:
      "You can reach Hemanth via email at bhemanthgoud7878@gmail.com or connect on LinkedIn. Use the contact form above to send a message!",
    experience:
      "Hemanth is a Full Stack Developer with extensive experience in building scalable web applications using modern technologies.",
    hire: "Hemanth is available for freelance projects and full-time opportunities. Please use the contact form or email directly to discuss your requirements.",
  };

  const getBotResponse = (userMessage: string): string => {
    console.log("userMessage", userMessage);
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes("tech") ||
      lowerMessage.includes("skill") ||
      lowerMessage.includes("stack")
    ) {
      return faqs.technologies;
    }
    if (
      lowerMessage.includes("project") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("portfolio")
    ) {
      return faqs.projects;
    }
    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("reach")
    ) {
      return faqs.contact;
    }
    if (lowerMessage.includes("experience") || lowerMessage.includes("about")) {
      return faqs.experience;
    }
    if (
      lowerMessage.includes("hire") ||
      lowerMessage.includes("available") ||
      lowerMessage.includes("opportunity")
    ) {
      return faqs.hire;
    }

    return "I can help you with:\n• Technologies Hemanth uses\n• His best projects\n• How to contact him\n• His experience\n• Hiring availability\n\nWhat would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage: Message = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        type: "bot",
        text: getBotResponse(input),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
                🤖
              </div>
              <div>
                <h3 className="text-white font-semibold">Ask Me Anything</h3>
                <p className="text-blue-100 text-xs">
                  Typically replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 p-4 space-y-4 max-h-96 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.type === "user"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all"
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
