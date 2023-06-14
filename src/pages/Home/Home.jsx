import { Helmet } from "react-helmet-async";
import ExtraSection from "./ExtraSection/ExtraSection";
import Banner from "./Banner/Banner";
import InstructorsSection from "./InstructorsSection/InstructorsSection";
import PopularClasses from "./PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sports</title>
      </Helmet>
      <div className="-mt-10 ">
        <Banner></Banner>
      </div>
      <div className="mx-3 md:max-w-2xl lg:max-w-6xl md:mx-auto">
        <PopularClasses></PopularClasses>
        <InstructorsSection></InstructorsSection>
        <ExtraSection></ExtraSection>
      </div>
    </div>
  );
};

export default Home;
