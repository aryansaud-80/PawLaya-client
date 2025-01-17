import { useState } from 'react';
import { images } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData({ ...loginData, [name]: value });
  };
  return (
    <form
      className='flex flex-col items-center justify-center gap-4 p-4 m-auto '
      onSubmit={handleSubmit}
    >
      <h1 className='mt-4 text-4xl max-sm:text-2xl max-sm:text-center'>{`Login with your Account`}</h1>

      <div className='flex flex-col gap-4 p-4'>
        <div className='flex items-center gap-2 px-2 bg-white border border-gray-500 rounded-md max-sm:w-full'>
          <img src={images.email_icon} alt='' className='size-6' />
          <input
            className='w-full py-3 border-none outline-none'
            type='email'
            name='email'
            value={loginData.email}
            onChange={(e) => handleForm(e)}
            required
            placeholder='Enter your Email'
          />
        </div>
        <div className='flex items-center gap-2 px-2 bg-white border border-gray-500 rounded-md max-sm:w-full'>
          <img src={images.lock_icon} alt='' className='size-6' />
          <input
            className='w-full py-3 border-none outline-none'
            type={showPassword ? 'text' : 'password'}
            name='password'
            value={loginData.password}
            onChange={(e) => handleForm(e)}
            placeholder='Enter password'
          />
          <img
            className='size-6'
            src={
              showPassword
                ? images.password_show_icon
                : images.password_hide_icon
            }
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <button className='px-10 py-3 mt-4 text-white rounded-md max-sm:w-full bg-emerald-600'>
          Login
        </button>
      </div>

      <p className='text-xl text-gray-600'>
        Register an account first?{' '}
        <span
          className='ml-2 text-green-400 underline cursor-pointer'
          onClick={() => navigate('/register')}
        >
          Register
        </span>
      </p>
    </form>
  );
};
export default Login;
