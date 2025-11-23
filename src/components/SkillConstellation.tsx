import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  x: number;
  y: number;
  category: string;
}

export default function SkillConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const skills: Skill[] = [
    { name: 'React', x: 150, y: 100, category: 'frontend' },
    { name: 'Django', x: 350, y: 100, category: 'backend' },
    { name: 'PostgreSQL', x: 500, y: 150, category: 'database' },
    { name: 'Redux', x: 100, y: 200, category: 'frontend' },
    { name: 'REST API', x: 400, y: 200, category: 'backend' },
    { name: 'Tailwind', x: 200, y: 250, category: 'frontend' },
    { name: 'Python', x: 450, y: 280, category: 'backend' },
    { name: 'Docker', x: 300, y: 320, category: 'tools' },
  ];

  const connections = [
    [0, 3],
    [0, 5],
    [1, 4],
    [1, 6],
    [4, 2],
    [6, 7],
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.lineWidth = 2;
      connections.forEach(([start, end]) => {
        ctx.beginPath();
        ctx.moveTo(skills[start].x, skills[start].y);
        ctx.lineTo(skills[end].x, skills[end].y);
        ctx.stroke();
      });

      skills.forEach((skill) => {
        ctx.beginPath();
        ctx.arc(skill.x, skill.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#3b82f6';
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(skill.name, skill.x, skill.y - 15);
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="bg-slate-900 rounded-2xl p-8 overflow-hidden">
      <h3 className="text-2xl font-bold text-white mb-4 text-center">
        Tech Stack Universe
      </h3>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="mx-auto"
      />
    </div>
  );
}
