import { useState } from 'react';
import { images } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    fullName: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className='flex flex-col items-center justify-center gap-4 p-2 m-auto'
      onSubmit={handleSubmit}
    >
      <h1 className='mt-4 text-4xl max-sm:text-2xl max-sm:text-center'>{`Register Your Account`}</h1>

      <div className='flex flex-col gap-2 p-4'>
        <div className='flex gap-4'>
          <div className='flex items-center gap-2 px-2 bg-white border border-gray-500 rounded-md max-sm:w-full'>
            <img src={images.person_icon} alt='' className='size-6' />
            <input
              className='w-full py-3 border-none outline-none'
              type='text'
              name='username'
              value={formData.username}
              onChange={(e) => handleForm(e)}
              min={3}
              required
              placeholder='Enter a username'
            />
          </div>
          <div className='flex items-center gap-2 px-2 bg-white border border-gray-500 rounded-md max-sm:w-full'>
            <img src={images.person_tick_icon} alt='' className='size-6' />
            <input
              className='w-full py-3 border-none outline-none'
              type='text'
              name='fullName'
              value={formData.fullName}
              onChange={(e) => handleForm(e)}
              required
              placeholder='Enter your fullname'
            />
          </div>
        </div>
        <div className='flex items-center gap-2 px-2 bg-white border border-gray-500 rounded-md max-sm:w-full'>
          <img src={images.email_icon} alt='' className='size-6' />
          <input
            className='w-full py-3 border-none outline-none'
            type='email'
            name='email'
            value={formData.email}
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
            value={formData.password}
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
        <div className='flex items-center gap-2 px-2 bg-white border border-gray-500 rounded-md max-sm:w-full'>
          <img src={images.phone_icon} alt='' className='size-6' />
          <input
            className='w-full py-3 border-none outline-none'
            type='text'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={(e) => handleForm(e)}
            required
            max={10}
            placeholder='Enter your number'
          />
        </div>
        <div className='flex items-center gap-2 px-2 bg-white border border-gray-500 rounded-md max-sm:w-full'>
          <img src={images.location_icon} alt='' className='size-6' />
          <input
            className='w-full py-3 border-none outline-none'
            type='text'
            name='address'
            value={formData.address}
            onChange={(e) => handleForm(e)}
            required
            placeholder='Enter your address'
          />
        </div>

        <button className='px-10 py-3 mt-4 text-white rounded-md max-sm:w-full bg-emerald-600'>
          Register
        </button>
      </div>

      <p className='text-xl text-gray-600'>
        Already have an account?{' '}
        <span className='ml-2 text-green-400 underline cursor-pointer'
          onClick={() => navigate('/login')}>
          Login
        </span>
      </p>
    </form>
  );
};
export default Register;
