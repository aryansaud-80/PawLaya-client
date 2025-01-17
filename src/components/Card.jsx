import { images } from '../assets/assets';
import FavIcon from '../icons/FavIcon';
import LocationIcon from '../icons/LocationIcon';

const Card = () => {
  return (
    <div className='flex flex-col border w-80 text-[#2e256f] rounded-lg overflow-hidden shadow-lg m-10'>
      <div className='overflow-hidden h-36'>
        <img src={images.bulldog_img} alt='' className='' />
      </div>

      <div className='flex flex-col gap-4 p-4'>
        <div className='flex justify-between w-full'>
          <p className='text-xl font-semibold'>Pitter</p>
          <FavIcon />
        </div>

        <div className='flex gap-2 text-[#010908] text-md'>
          <LocationIcon />
          California, USA
        </div>

        <div className='flex flex-col justify-between gap-5'>
          <div className='flex justify-between'>
            <div className='text-[#010908] text-lg'>
              Gender:{' '}
              <span className='bg-[#b9b3e5] py-2 px-3 rounded-full text-[#2e256f] font-normal'>
                Male
              </span>
            </div>

            <div className='text-[#010908] text-lg'>
              Breed:{' '}
              <span className='bg-[#b9b3e5] py-2 px-3 rounded-full text-[#2e256f] font-normal '>
                Bulldog
              </span>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='text-[#010908] text-lg'>
              Age:{' '}
              <span className='bg-[#b9b3e5] py-2 px-3 rounded-full text-[#2e256f] font-normal'>
                5 years
              </span>
            </div>

            <div className='text-[#010908] text-lg'>
              Size:{' '}
              <span className='bg-[#b9b3e5] py-2 px-3 rounded-full text-[#2e256f] font-normal'>
                Medium
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className='text-[#020d0b] text-sm'>
            Pitter is a friendly, playful, smart male dog. Only adopted to a
            house...
          </p>
        </div>

        <div>
          <button className='border-[#9990da] border p-3 w-full rounded-lg hover:bg-[#5d4fc4] hover:text-white'>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
