import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-slate-900 transition-opacity duration-500">
      <div className="relative">
        {/* <div className="absolute inset-0 animate-ping">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20"></div>
        </div> */}

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full bg-white dark:bg-slate-900"></div>
            <div className="relative z-10 text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              HG
            </div>
          </div>

          <div className="flex gap-2">
            <div
              className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-cyan-500 animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>

          <p className="text-slate-600 dark:text-slate-400 font-medium animate-pulse">
            Loading Portfolio...
          </p>
        </div>
      </div>
    </div>
  );
}
