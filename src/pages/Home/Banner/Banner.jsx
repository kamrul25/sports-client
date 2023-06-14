import img2 from "../../../assets/banner/sp8.avif";
import img3 from "../../../assets/banner/sp3.jpg";
import img4 from "../../../assets/banner/sp6.webp";
import img5 from "../../../assets/banner/sp5.jpeg";

const Banner = () => {
  const info = (
    <>
      <p className="text-base-300 md:font-bold text-xl md:text-3xl">
        Learning Today,
      </p>
      <p className="text-base-300 md:font-bold text-xl md:text-3xl">
        Leading Tomorrow
      </p>
      <button className="btn btn-success border border-white">
        Get Started
      </button>
    </>
  );
  return (
    <>
      <div className="carousel w-full h-[550px]">
        <div id="item1" className="carousel-item w-full">
          <img src={img2} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={img3} className="w-full" />
        </div>

        <div id="item3" className="carousel-item w-full">
          <img src={img4} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={img5} className="w-full" />
        </div>
      </div>
      <div className="space-y-1  md:space-y-3 absolute top-1/3 left-24">
        {" "}
        {info}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>{" "}
    </>
  );
};

export default Banner;
