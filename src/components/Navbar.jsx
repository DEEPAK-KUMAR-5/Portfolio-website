import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

export default function Navbar() {
  return (
    <nav className="bg-[#0e111a] px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        Portfolio
      </div>
      <div className="flex gap-6 items-center">
        {navItems.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `relative px-4 py-1 text-sm font-medium text-white transition ${
                isActive ? "font-semibold" : "hover:text-gray-300"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-md"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{name}</span>
              </>
            )}
          </NavLink>
        ))}
        <a
          href="/cv.pdf"
          download
          className="relative px-4 py-1 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md shadow hover:shadow-[0_0_10px_rgba(138,43,226,0.7)] transition duration-300"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}
