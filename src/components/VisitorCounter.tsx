import { useState, useEffect } from "react";
import { Users } from "lucide-react";
// import { portfolioAPI } from '../lib/supabase';
import { getClientIP, hashIP } from "../lib/utils";

export default function VisitorCounter() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    trackVisit();
    loadCount();
  }, []);

  const trackVisit = async () => {
    try {
      const clientId = getClientIP();
      const ipHash = await hashIP(clientId);
      const userAgent = navigator.userAgent;
      // await portfolioAPI.trackVisitor(ipHash, userAgent);
    } catch (error) {
      console.error("Error tracking visitor:", error);
    }
  };

  const loadCount = async () => {
    try {
      // const visitorCount = await portfolioAPI.getVisitorCount();
      // setCount(visitorCount);
    } catch (error) {
      console.error("Error loading visitor count:", error);
    }
  };

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg">
      <Users size={20} className="text-blue-600 dark:text-blue-400" />
      <div className="text-sm">
        <span className="font-bold text-slate-900 dark:text-white">
          {count.toLocaleString()}
        </span>
        <span className="text-slate-600 dark:text-slate-400 ml-1">
          visitors
        </span>
      </div>
    </div>
  );
}
