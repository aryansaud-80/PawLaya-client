import { useContext, useState } from 'react';
import Role from '../components/Role';
import { AppContext } from '../context/AppContext';
import { images } from '../assets/assets';

const Register = () => {
  const { role, setRole } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    role: role || '',
    fullName: '',
    address: '',
  });
  const [roleSelected, setRoleSelected] = useState(false);

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {roleSelected && (
        <div className='absolute right-0 flex gap-4 px-6 top-6'>
          <p className='text-xl font-thin'>
            {role === 'customer'
              ? 'Looking to sell pets?'
              : 'Looking to get a new buddy?'}
          </p>

          <p
            className='text-xl font-thin cursor-pointer text-emerald-500'
            onClick={() =>
              setRole((prev) => (prev === 'customer' ? 'seller' : 'customer'))
            }
          >
            {role === 'customer' ? 'Create as seller' : 'Create as customer'}
          </p>
        </div>
      )}
      {!roleSelected && <Role setRoleSelected={setRoleSelected} />}

      {roleSelected && role !== '' && (
        <>
          <form
            className='flex flex-col items-center justify-center gap-10 p-4 m-auto '
            onSubmit={handleSubmit}
          >
            <h1 className='mt-4 text-4xl max-sm:text-2xl max-sm:text-center'>{`Register to ${
              role === 'seller' ? 'sell your pets' : 'find your new buddy'
            }`}</h1>

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
                  <img
                    src={images.person_tick_icon}
                    alt=''
                    className='size-6'
                  />
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
          </form>
        </>
      )}
    </div>
  );
};
export default Register;
