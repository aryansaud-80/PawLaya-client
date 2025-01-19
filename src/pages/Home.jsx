import AdoptionStep from '../components/AdoptionStep';
import AnimalHumanRel from '../components/AnimalHumanRel';
import Card from '../components/Card';
import Hero from '../components/Hero';
import Pets from '../components/Pets';

const Home = () => {
  return (
    <section>
      <Hero />
      <Pets />
      <AdoptionStep />
      <AnimalHumanRel />
    </section>
  );
};
export default Home;
