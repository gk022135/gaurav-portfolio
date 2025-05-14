'use client';
import Image from 'next/image';
import todo from '../../../Assets/todo.png';
import todo1 from '../../../Assets/todo1.png';

export default function TodoPage() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black px-6 py-12 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-emerald-400">
          Productivity Enhanced Todo App
        </h1>

        {/* Description */}
        <p className="text-center text-lg text-neutral-300 max-w-3xl mx-auto mb-12">
          This Todo app is built not just for listing tasks—but for **measuring your productivity**. From setting timers for each task to tracking completion percentage and progress analytics, this tool supports focused work and data-backed task management.
        </p>

        {/* Features */}
        <div className="bg-zinc-800 rounded-xl p-6 md:p-10 mb-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-emerald-400">Key Features</h2>
          <ul className="list-disc list-inside space-y-4 text-neutral-200">
            <li>
              <strong className="text-teal-300">Timer Per Task:</strong> Set a countdown timer for focused work sessions.
            </li>
            <li>
              <strong className="text-teal-300">Progress Tracking:</strong> See how much of the task you've completed using visual percentage indicators.
            </li>
            <li>
              <strong className="text-teal-300">Productivity Analytics:</strong> View task completion trends and performance summaries.
            </li>
            <li>
              <strong className="text-teal-300">Backend Support:</strong> All your tasks are stored persistently with real-time syncing.
            </li>
            <li>
              <strong className="text-teal-300">Minimal UI:</strong> Built to reduce distraction and maximize focus.
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="bg-zinc-800 rounded-xl p-6 md:p-10 mb-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-lime-400">Benefits</h2>
          <ul className="list-disc list-inside space-y-3 text-neutral-200">
            <li>Boost productivity using visual progress and timers.</li>
            <li>Track how much time you spend on each task.</li>
            <li>Organize your day with performance in mind.</li>
            <li>Helps in building disciplined and goal-oriented habits.</li>
          </ul>
        </div>

        {/* Screenshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-zinc-800 p-4 rounded-lg shadow-md">
            <Image src={todo} alt="Todo App Home" className="rounded-md" />
            <p className="mt-2 text-center text-neutral-300">Task Overview Dashboard</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg shadow-md">
            <Image src={todo1} alt="Todo with Timer and Progress" className="rounded-md" />
            <p className="mt-2 text-center text-neutral-300">Timer & Progress View</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-zinc-800 rounded-xl p-6 md:p-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-400">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-3 text-neutral-200">
            <li><strong>React + TypeScript:</strong> Dynamic frontend with strong typing.</li>
            <li><strong>Tailwind CSS:</strong> Utility-first styling for rapid UI design.</li>
            <li><strong>Node.js & Express:</strong> Backend support with RESTful APIs.</li>
            <li><strong>MongoDB:</strong> Persistent task storage and analytics data.</li>
            <li><strong>Framer Motion:</strong> Elegant transitions and animations.</li>
            <li><strong>Chart.js / Recharts:</strong> For visualizing your productivity data.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
