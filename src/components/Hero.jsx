import { useNavigate } from 'react-router-dom';
import { images } from '../assets/assets';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-between px-5 pt-20 mx-auto sm:flex-row sm:container max-md:justify-center'>
      <div className='flex flex-col gap-8 text-center sm:text-left'>
        <h1 className='text-6xl text-[#0a453a] font-extrabold leading-tight tracking-wide max-lg:text-5xl max-md:text-4xl'>
          Give a New Life to <br />
          <div className='mt-3'>
            <span className='text-[#675bc8] underline'>Furry</span>
            <span className='ml-3 text-[#2e256f]'>Friends</span>
          </div>
        </h1>
        <p className='text-lg text-[#041b17] max-w-[450px] mx-auto sm:mx-0'>
          Pet adoption is a vital aspect of animal welfare, offering hope and a
          fresh start to pets in need. Open your heart and your home to a
          shelter pet today.
        </p>

        <div className='flex items-center justify-center gap-6 sm:justify-start'>
          <button className='py-3 px-12 border border-[#675bc8] rounded-full text-lg font-semibold text-[#675bc8] bg-transparent hover:bg-[#675bc8] hover:text-white transition-all shadow-lg'
          onClick={() => navigate('/adopt')}
          >
            Adopt
          </button>
          <button className='py-3 px-12 border border-[#675bc8] rounded-full text-lg font-semibold text-[#675bc8] bg-transparent hover:bg-[#675bc8] hover:text-white transition-all shadow-lg'
          onClick={() => navigate('/shop')} 
          >
            Buy
          </button>
        </div>
      </div>

      <div className='relative max-md:hidden'>
        <div className='w-[450px] h-[450px] rounded-full bg-gradient-to-b from-[#675bc8] to-transparent shadow-xl max-lg:w-[350px] max-lg:h-[350px]'></div>
        <img
          src={images.hero_img}
          alt='Hero Image'
          className='absolute bottom-0 right-[-20px] max-lg:right-[-10px] max-lg:w-[300px] w-[400px]'
        />
      </div>
    </div>
  );
};

export default Hero;
