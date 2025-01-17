import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { images } from '../assets/assets';
import { useState } from 'react';
import Notification from '../icons/Notification';

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [navStatus, setNavStatus] = useState(false);
  const [notifications, setNotifications] = useState(3);

  const location = useLocation().pathname;
  const navigate = useNavigate();
  const handleNavClick = () => setNavStatus(!navStatus);

  const navLinks = ['Home', 'Adopt', 'Shop', 'About', 'Contact'];

  if (location === '/register' || location === '/login') {
    return (
      <nav className='flex items-center h-20 py-2 m-auto sm:container'>
        <div
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => navigate('/')}
        >
          <img
            src={images.logo_img}
            alt='logo_image'
            className='px-2 min-w-30 min-h-30'
          />
        </div>
      </nav>
    );
  }

  return (
    <nav className='flex items-center justify-between h-20 px-4 py-2 mx-auto sm:container'>
      <div
        className='flex items-center gap-2 cursor-pointer'
        onClick={() => navigate('/')}
      >
        <img
          src={images.logo_img}
          alt='logo_image'
          className='w-24 h-24 px-2 min-h-20 min-w-20'
        />
      </div>

      <div className='hidden gap-8 text-lg font-medium md:flex'>
        {navLinks.map((item) => (
          <NavLink
            key={item}
            to={`${item.toLowerCase() === 'home' ? '/' : item.toLowerCase()}`}
            className={({ isActive }) =>
              isActive
                ? 'text-[#675BC8] border-b-2 border-[#675BC8] pb-1'
                : 'text-gray-700 hover:text-[#675BC8] transition duration-300'
            }
          >
            {item}
          </NavLink>
        ))}
      </div>

      <div className='flex items-center gap-6'>
        <div className='relative cursor-pointer hover-scale'>
          <Notification />
          {notifications > 0 && (
            <div className='absolute top-0 right-0 px-1 text-xs text-white bg-red-500 rounded-full'>
              {notifications}
            </div>
          )}
        </div>

        {login ? (
          <img
            src={images.profile_img}
            alt='profile_img'
            className='w-10 h-10 rounded-full shadow-md cursor-pointer hover-scale'
          />
        ) : (
          <div className='items-center gap-4 px-4 py-2 border rounded-lg border-[#675BC8] shadow-sm hidden sm:flex'>
            <Link to='/login' className='text-[#675BC8] hover:underline'>
              Login
            </Link>
            <div className='w-px bg-[#675bc8] h-7' />
            <Link to='/register' className='text-[#675BC8] hover:underline'>
              Register
            </Link>
          </div>
        )}

        <div
          className='relative z-50 cursor-pointer md:hidden'
          onClick={handleNavClick}
        >
          {!navStatus ? (
            <img
              src={images.hamburger_img}
              alt='menu icon'
              className='w-8 h-8 min-w-8 min-h-8'
            />
          ) : (
            <img src={images.cross_img} alt='close icon' className='w-8 h-8' />
          )}
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-lg z-40 flex flex-col items-start pt-20 px-6 gap-6 transform transition-transform duration-300 ease-in-out ${
          navStatus ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((item) => (
          <NavLink
            key={item}
            to={`${item.toLowerCase() === 'home' ? '/' : item.toLowerCase()}`}
            className={({ isActive }) =>
              isActive
                ? 'text-[#675BC8] border-b-2 border-[#675BC8] pb-1 w-30 '
                : 'text-gray-700 hover:text-[#675BC8] transition duration-300 w-full'
            }
            onClick={handleNavClick}
          >
            {item}
          </NavLink>
        ))}

        {!login && (
          <div className='flex items-center gap-4 px-4 py-2 border rounded-lg border-[#675BC8] shadow-sm'>
            <Link to='/login' className='text-[#675BC8] hover:underline'>
              Login
            </Link>
            <div className='w-px bg-[#675bc8] h-7' />
            <Link to='/register' className='text-[#675BC8] hover:underline'>
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
