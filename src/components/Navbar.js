import { NavLink } from 'react-router-dom';
import { useTheme } from '../App';

export default function Navbar() {
  const { isDark } = useTheme();

  // Navigation links array
  const navLinks = [
    { label: 'Home', path: '/', isEnd: true },
    { label: 'About', path: '/about', isEnd: false },
    { label: 'Projects', path: '/projects', isEnd: false }
  ];

  return (
    <nav className={`fixed w-full top-0 backdrop-blur-sm z-50 border-b ${
      isDark 
        ? 'bg-gray-900/90 border-gray-700' 
        : 'bg-white/90 border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Navigation Links - Left Side */}
          <ul className="flex space-x-8">
            {navLinks.map(({ label, path, isEnd }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={isEnd}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 font-semibold"
                      : `${isDark ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-600 transition-colors`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Name/Logo - Right Side */}
          <a href="/" className={`text-xl sm:text-2xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            K.D.
          </a>
        </div>
      </div>
    </nav>
  );
}
