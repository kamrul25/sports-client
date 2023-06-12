import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/reviews/kamrul.jpg";
import img2 from "../../../assets/reviews/sifat.jpg";

const ExtraSection = () => {
  return (
    <div>
      <SectionTitle
        subHeading="TESTIMONIALS"
        heading="WHAT ARE THEY SAYING"
      ></SectionTitle>

      <div className="flex justify-between items-center gap-10">
        <div className="shadow-lg rounded-lg    p-4 space-y-3">
          <div className="flex justify-start items-center gap-5">
            <div className="avatar w-24 ">
              <img src={img1} alt="" className="rounded-full " />
            </div>
            <div>
              <h1 className="text-2xl text-black font-bold mb-3">
                Kamrul Hasan Jaman
              </h1>
              <p className="text-[#737373] text-lg font-semibold">Cricketer</p>
            </div>
          </div>
          <div>
            <p className="text-[#737373] text-sm">Fantastic sports academy! The coaches are highly skilled and dedicated, providing excellent training sessions. The facilities are top-notch, with state-of-the-art equipment. I have seen tremendous improvement in my skills since joining. Highly recommended!</p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg  p-4 space-y-3">
          <div className="flex justify-start items-center gap-5">
            <div className="avatar w-24 ">
              <img src={img2} alt="" className="rounded-full " />
            </div>
            <div>
              <h1 className="text-2xl text-black font-bold mb-3">
                Sifat Ahamed
              </h1>
              <p className="text-[#737373] text-lg font-semibold">Footballer</p>
            </div>
          </div>
          <div>
            <p className="text-[#737373] text-sm">Fantastic sports academy! The coaches are highly skilled and dedicated, providing excellent training sessions. The facilities are top-notch, with state-of-the-art equipment. I have seen tremendous improvement in my skills since joining. Highly recommended!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
