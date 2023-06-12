import { Helmet } from "react-helmet-async";
import ExtraSection from "./ExtraSection/ExtraSection";


const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Sports</title>
            </Helmet>
            <h1>I am from Home page</h1>
           <div className="max-w-6xl mx-auto">
           <ExtraSection></ExtraSection>
           </div>
        </div>
    );
};

export default Home;