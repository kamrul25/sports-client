import { Helmet } from "react-helmet-async";
import ExtraSection from "./ExtraSection/ExtraSection";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Sports</title>
            </Helmet>
           <div className="-mt-10 ">
           <Banner></Banner>
           </div>
           <div className="max-w-6xl mx-auto">
           <ExtraSection></ExtraSection>
           </div>
        </div>
    );
};

export default Home;