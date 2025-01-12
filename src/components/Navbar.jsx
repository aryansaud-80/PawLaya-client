import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { images } from '../assets/assets';
import { useState } from 'react';

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [navStatus, setNavStatus] = useState(false);

  const location = useLocation().pathname;
  const navigate = useNavigate();
  const handleNavClick = () => {
    setNavStatus(!navStatus);
  };

  if (location === '/register' || location === '/login') {
    return (
      <nav className='py-2 m-auto sm:container'>
        <div className='flex items-center gap-2' onClick={() => navigate('/')}>
          <img
            src={images.logo_img}
            alt='logo_image'
            className='px-2 size-14'
          />
          <span className='text-2xl text-[#FFA726] font-logoFnt'>PawLaya</span>
        </div>
      </nav>
    );
  }

  return (
    <nav className='flex items-center justify-between py-2 m-auto sm:container'>
      <div className='flex items-center gap-2' onClick={() => navigate('/')}>
        <img src={images.logo_img} alt='logo_image' className='px-2 size-14' />
        <span className='text-2xl text-[#FFA726] font-logoFnt max-md:hidden '>
          PawLaya
        </span>
      </div>

      <div className='flex gap-10 text-xl max-sm:hidden '>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-btn-sky-blue ' : 'text-gray-500'
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/adopt'
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-btn-sky-blue ' : 'text-gray-500'
          }
        >
          Adopt
        </NavLink>
        <NavLink
          to='/shop'
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-btn-sky-blue' : 'text-gray-500'
          }
        >
          Shop
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-btn-sky-blue' : 'text-gray-500'
          }
        >
          About
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-btn-sky-blue' : 'text-gray-500'
          }
        >
          Contact
        </NavLink>
      </div>

      <div className='flex gap-3'>
        {login ? (
          <div className='cursor-pointer'>
            <img
              src={images.profile_img}
              alt='profile_img'
              className='size-10 min-w-6'
            />
          </div>
        ) : (
          <Link to='/register'>Register</Link>
        )}

        <div
          className='relative cursor-pointer sm:hidden'
          onClick={handleNavClick}
        >
          {!navStatus ? (
            <img src={images.hamburger_img} alt='' className='size-10' />
          ) : (
            <img src={images.cross_img} alt='' className='size-10' />
          )}
        </div>

        <div
          className={`
            fixed top-16 right-0 
            text-2xl
            flex flex-col gap-8 
            px-6 py-4   
            bg-[#fff5e6]/90
            h-screen w-72
            max-navScreen:w-full
            transform transition-transform duration-500 ease-in-out
            ${navStatus ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-btn-sky-blue  w-10'
                : 'text-gray-500'
            }
            onClick={handleNavClick}
          >
            Home
          </NavLink>
          <NavLink
            to='/adopt'
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-btn-sky-blue  w-10'
                : 'text-gray-500'
            }
            onClick={handleNavClick}
          >
            Adopt
          </NavLink>
          <NavLink
            to='/shop'
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-btn-sky-blue w-10' : 'text-gray-500'
            }
            onClick={handleNavClick}
          >
            Shop
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-btn-sky-blue w-10' : 'text-gray-500'
            }
            onClick={handleNavClick}
          >
            About
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-btn-sky-blue w-10' : 'text-gray-500'
            }
            onClick={handleNavClick}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
