import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularClasses = () => {
  const { data: popularClasses = [] } = useQuery({
    queryKey: ["popularClasses"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/popularClasses`);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        subHeading="here"
        heading="all popular classes"
      ></SectionTitle>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {popularClasses.map((cla) => (
          <div key={cla._id} className="card bg-base-100 shadow-xl">
            <figure className="w-full h-[300px]">
              <img
                src={cla.image}
                alt="Instructor"
                className=" w-full h-full"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
