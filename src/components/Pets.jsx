import Card from './Card';

const Pets = () => {
  return (
    <div className="flex flex-col items-center py-10 mt-20">
      <h1 className="mb-8 text-3xl font-extrabold text-center text-[#010908]">
        Take a Look at Some of Our Pets
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:container sm:m-auto">
        {Array.from({ length: 4 }, (_, index) => (
          <Card key={index} />
        ))}
      </div>
        <button className='border border-[#675bc8] p-2 rounded-md hover:bg-[#675bc8] hover:text-white font-medium mt-8'>See More</button>
    </div>
  );
};

export default Pets;
