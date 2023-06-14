import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";

const InstructorsSection = () => {
    const { data: instructors = [] } = useQuery({
      queryKey: ["users", "instructors"],
      queryFn: async () => {
        const res = await  axios.get(`http://localhost:5000/users/instructor`)
        return res.data;
      },
    });
    return (
        <div >
        <SectionTitle
          subHeading="here"
          heading="see all instructors"
        ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {instructors.map((person) => (
          <div key={person._id} className="card bg-base-100 shadow-xl">
            <figure className="w-full h-[300px]">
              <img
                src={person.image}
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

export default InstructorsSection;