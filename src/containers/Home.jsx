import Hero from "../components/views/Hero";
import CitieSlides from "../components/views/CitieSlides";
import PlanTravel from "../components/views/PlanTravel";
import Santorini from "../components/views/Santorini";
import Room from "../components/views/Room";
import PageFooter from "../components/views/PageFooter";

function Home() {
  return (
    <div>
      <Hero />
      <CitieSlides />
      <PlanTravel />
      <Santorini />
      <Room />
      <PageFooter />
    </div>
  );
}

export default Home;
