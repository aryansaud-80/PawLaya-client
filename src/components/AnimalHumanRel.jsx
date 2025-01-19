import { images, animalHumanRel } from '../assets/assets';

const AnimalHumanRel = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 p-5 mx-auto sm:container lg:flex-row'>
      <div className='flex flex-col items-center justify-center gap-3 '>
        <div className='text-center'>
          <h2 className='text-2xl sm:text-4xl text-[#0C0C0C]'>
            Peaceful Coexistence
          </h2>
          <h2 className='text-[#0A453A] text-2xl sm:text-4xl'>
            Human & Animals
          </h2>
        </div>

        <img src={images.petAdoption} alt=''  className='max-w-full'/>
      </div>

      <div className='grid grid-cols-1 gap-6 pt-6 items-center justify-center lg:grid-cols-2 w-full sm:w-[60%]'>
        {animalHumanRel.map(({ title, text, image }, index) => (
          <div
            key={index}
            className='flex flex-col items-center w-full p-6 transition-shadow duration-200 bg-white border rounded-lg shadow hover:shadow-lg '
          >
            <div className='flex items-center self-start gap-3 mb-4'>
              <img src={images.paws} alt='' className='w-8 h-8' />
              <h4 className='text-lg text-[#0A453A]'>{title}</h4>
            </div>
            <p className='mb-4 text-justify text-[#0C0C0C]'>{text}</p>
            <div className='w-full'>
              <img src={image} alt={title} className='rounded-lg' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AnimalHumanRel;
