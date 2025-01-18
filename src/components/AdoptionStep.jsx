import { images, stepsDetail } from '../assets/assets';

const AdoptionStep = () => {
  return (
    <div className='relative flex flex-col items-center gap-10 sm:container sm:m-auto'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl text-[#010908] font-extrabold'>
          Adopt a pet in just
        </h1>
        <h3 className='text-[#0a453a] text-lg font-medium'>3 Easy Steps</h3>
      </div>

      <div className='relative flex flex-wrap items-center justify-center gap-10 mb-10 lg:gap-44'>
        {stepsDetail.map((step, index) => (
          <div
            key={step.id}// Adjust positioning dynamically
            className='relative z-10 border border-[#cbcbcb] w-64 flex flex-col items-center pt-10 p-3 rounded-lg cursor-pointer hover:shadow-xl h-48'
          >
            <span className='absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#9990da] text-[#19143d] font-bold'>
              {index + 1}
            </span>

            <div>
              <img src={step.icon} alt='' />
            </div>

            <p className='text-[#010908] text-center font-light'>
              {step.detail}
            </p>
          </div>
        ))}

        {stepsDetail.length > 1 &&
          stepsDetail.map((_, index) => {
            if (index === stepsDetail.length - 1) return null;

            return (
              <img
                key={index}
                src={index === 0 ? images.left : images.right}
                alt='Arrow'
                className={`absolute transform -translate-x-1/2 hidden lg:block size-44 ${
                  index === 0 ? 'left-[31%] ' : 'left-[69%] '
                }`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AdoptionStep;
