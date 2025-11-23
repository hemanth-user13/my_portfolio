import { useKonamiCode } from '../hooks/useKonamiCode';

export default function EasterEgg() {
  const activated = useKonamiCode();

  if (!activated) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 text-center max-w-2xl mx-4 shadow-2xl transform animate-bounce">
        <div className="text-8xl mb-6">🎮</div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Achievement Unlocked!
        </h2>
        <p className="text-xl text-white/90 mb-6">
          You found the secret Developer Zone! 🚀
        </p>
        <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
          <p className="text-white font-mono text-lg">
            "With great code comes great responsibility"
          </p>
          <p className="text-white/80 mt-2">- Hemanth's Dev Wisdom</p>
        </div>
        <p className="text-white/70 mt-6 text-sm">
          This message will self-destruct in 5 seconds...
        </p>
      </div>
    </div>
  );
}
