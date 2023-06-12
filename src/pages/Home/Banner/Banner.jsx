import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img2 from "../../../assets/banner/sp2.jpg";
import img3 from "../../../assets/banner/sp3.jpg";
import img4 from "../../../assets/banner/sp4.jpg";
import img5 from "../../../assets/banner/sp5.jpeg";

const Banner = () => {
  return (
    <div >
      <Carousel>
        <div >
          <img src={img2} className=" h-fit" />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
