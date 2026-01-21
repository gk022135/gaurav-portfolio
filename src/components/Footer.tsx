import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-base-100 text-gray-400 antialiased py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">MyPortfolio</h2>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-gray-400 transition-colors">About</Link>
          <Link href="/projects" className="hover:text-gray-400 transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/gk022135" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/gaurav_krrr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">LinkedIn</a>
          <a href="https://twitter.com/Gaurav_krrr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}