  import { navItems } from './Navitem';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <div className='container flex cursor-pointer flex-row justify-between items-center gap-2 mt opacity-100 bg-[#F77F00] lg:shadow-lg w-full h-full'>
        <h1 className='font-semibold mx-10 text-white'>Pure Essence</h1>
        <ul className='hidden lg:flex flex-row justify-center items-center mx-auto gap-10'>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className='text-white font-[10px]'>{item.label}</a>
            </li>
          ))}
        </ul>

        
        
        {/* Mobile Button */}
        <div className='lg:hidden  flex flex-row justify-center gap-4 items-center'>
        
        
        <div className=' flex flex-col mx-8 justify-center gap-2'>
          <button onClick={toggleNavbar} className="text-white">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Menu (to be displayed when mobileOpen is true) */}
      {mobileOpen && (
        <div className='lg:hidden flex flex-col items-center bg-[#F77F00] p-4'>
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className='text-white py-2'>{item.label}</a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
