import { useState } from 'react';
import { navItems } from './Navitem';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="bg-[#F77F00] w-[85%] mx-auto shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-white font-bold text-xl">Pure Essence</h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-white font-medium hover:text-yellow-100 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="text-white">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F77F00] px-4 py-4 space-y-2  flex flex-col items-start">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white text-base hover:text-yellow-100 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
