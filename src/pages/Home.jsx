import AdoptionStep from '../components/AdoptionStep';
import Card from '../components/Card';
import Hero from '../components/Hero';
import Pets from '../components/Pets';

const Home = () => {
  return (
    <section>
      <Hero />
      <Pets />
      <AdoptionStep />
    </section>
  );
};
export default Home;
