import Image from "next/image";
import chat1 from "../../../Assets/chat1.png";
import post from "../../../Assets/post.png";

const Chat = () => {
  return (
    <section className="w-full px-6 py-12 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-10 text-sky-400">
          Real-Time Chat Application
        </h1>

        <p className="text-center text-lg max-w-3xl mx-auto mb-10 text-neutral-300">
          This real-time chat app allows users to connect, register, and engage in seamless conversations. Built with the MERN stack, it ensures secure messaging, instant updates, and a modern user interface that feels intuitive and fast.
        </p>

        {/* Key Features */}
        <div className="bg-zinc-800 rounded-xl p-6 md:p-10 mb-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-sky-400">Key Features</h2>
          <ul className="list-disc list-inside space-y-3 text-neutral-200">
            <li><strong className="text-teal-400">User Registration & Login:</strong> Secure authentication system for new and returning users.</li>
            <li><strong className="text-teal-400">Live Messaging:</strong> Messages appear in real time without page refresh.</li>
            <li><strong className="text-teal-400">User Profiles:</strong> Users can post, manage and view messages easily.</li>
            <li><strong className="text-teal-400">Clean UI:</strong> Modern chat interface built with responsiveness in mind.</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="bg-zinc-800 rounded-xl p-6 md:p-10 mb-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-400">Benefits</h2>
          <ul className="list-disc list-inside space-y-3 text-neutral-200">
            <li>Faster communication between users without lag.</li>
            <li>Easy onboarding for new users via simple registration.</li>
            <li>Scalable backend ready for group chats and future features.</li>
          </ul>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-zinc-800 p-4 rounded-lg shadow-md">
            <Image src={chat1} alt="Chat Interface" className="rounded-md" />
            <p className="mt-2 text-center text-neutral-300">Chat Interface</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg shadow-md">
            <Image src={post} alt="Post Message" className="rounded-md" />
            <p className="mt-2 text-center text-neutral-300">Message Posting</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-zinc-800 rounded-xl p-6 md:p-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-400">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-3 text-neutral-200">
            <li><strong>MongoDB:</strong> For real-time message storage.</li>
            <li><strong>Express.js:</strong> Server-side routing and API handling.</li>
            <li><strong>React:</strong> Dynamic and interactive frontend.</li>
            <li><strong>Node.js:</strong> Backend logic and REST APIs.</li>
            <li><strong>Socket.io:</strong> Real-time communication layer.</li>
            <li><strong>Tailwind CSS:</strong> For styling and responsiveness.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Chat;
