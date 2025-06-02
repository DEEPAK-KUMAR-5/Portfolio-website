import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
];

export default function Navbar() {
  return (
    <nav className="bg-[#0e111a] px-4 sm:px-6 py-4 flex flex-wrap justify-between items-center shadow-md">
      <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        Portfolio
      </div>
      <div className="flex flex-wrap gap-4 items-center mt-2 sm:mt-0">
        {navItems.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `relative px-3 py-1 text-sm font-medium text-white transition ${
                isActive ? 'font-semibold' : 'hover:text-gray-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-md"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{name}</span>
              </>
            )}
          </NavLink>
        ))}
        <a
          href="/resume.pdf"
          download
          className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 rounded-md text-sm font-medium text-white shadow hover:shadow-lg hover:scale-105 transition-all"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}
