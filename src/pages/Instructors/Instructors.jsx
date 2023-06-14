import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import axios from "axios";

const Instructors = () => {
 
  const { data: instructors = [] } = useQuery({
    queryKey: ["users", "instructors"],
    queryFn: async () => {
      const res = await  axios.get(`http://localhost:5000/users/instructor`)
      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Sports | Instructors</title>
      </Helmet>
      <div className=" mx-3 md:max-w-2xl lg:max-w-6xl md:mx-auto">
        <SectionTitle
          subHeading="here"
          heading="All instructors Basic Information"
        ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {instructors.map((person) => (
          <div key={person._id} className="card bg-base-100 shadow-xl border border-primary">
            <figure className="w-full h-[300px]">
              <img
                src={person.image}
                alt="Instructor"
                className=" w-full h-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {person.name}</h2>
              <p>Email: {person.email}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Instructors;
