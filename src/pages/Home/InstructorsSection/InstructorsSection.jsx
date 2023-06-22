import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const InstructorsSection = () => {
    const { data: instructors = [] } = useQuery({
      queryKey: ["users", "instructors"],
      queryFn: async () => {
        const res = await  axios.get(`https://sports-server-two.vercel.app/users/instructor`)
        return res.data;
      },
    });

    useEffect(()=>{
      window.scrollTo(0,0)
      },[])
    return (
        <div >
        <SectionTitle
          subHeading="here"
          heading="see all instructors"
        ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {instructors.slice(0, 6).map((person) => (
          <div key={person._id} className="card bg-base-100 shadow-xl ">
            <figure className="w-full h-[300px]">
              <img
                src={person.image}
                alt="Instructor"
                className=" w-full h-full rounded-lg border border-primary"
              />
            </figure>
          </div>
        ))}
      </div>
      <div className="text-center my-5 ">
        <Link to="instructors" className="btn btn-primary">See All Instructors</Link>
      </div>
      </div>
    );
};

export default InstructorsSection;