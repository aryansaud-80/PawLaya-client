import { useContext } from 'react';
import { userTypes } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Role = ({ setRoleSelected }) => {
  const { role, setRole } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center w-full h-full px-2 mt-10'>
      <h2 className='mb-10 text-4xl max-sm:text-2xl max-sm:text-center'>
        Join as a customer or seller
      </h2>

      <div className='flex gap-10 max-sm:flex-col max-sm:w-full'>
        {userTypes.map((userType, index) => {
          return (
            <div
              key={index}
              onClick={() => setRole(userType.name)}
              className={`flex flex-col border-2 w-[243.45px] p-3 gap-4 rounded-lg cursor-pointer focus:border-blue-300 active:shadow-l max-sm:w-full ${
                role === userType.name ? 'border-black' : ''
              }`}
            >
              <div className='flex justify-between'>
                <img src={userType.logo} alt='' className='size-8' />
                <input
                  type='radio'
                  name={`role-${userType.name}`}
                  value={userType.name}
                  checked={role === userType.name}
                  onChange={() => {}}
                  className='w-6 h-6 bg-white border-2 rounded-full cursor-pointer checked:bg-green-600 checked:border-green-600 focus:ring-0'
                />
              </div>

              <p className='text-lg'>{userType.content}</p>
            </div>
          );
        })}
      </div>

      <button
        className={`mt-8 ${
          role !== ' ' && 'bg-blue-600 text-white'
        } bg-gray-200 px-4 text-xl rounded-lg max-sm:w-full py-2`}
        onClick={() => setRoleSelected((prev) => !prev)}
      >
        {role === '' ? 'Create Account' : `Create as ${role}`}
      </button>

      <p className='mt-4'>
        Already have an account?{' '}
        <span
          className='underline cursor-pointer text-emerald-600 decoration-emerald-600 decoration-solid'
          onClick={() => navigate('/login')}
        >
          Login
        </span>
      </p>
    </div>
  );
};
export default Role;
