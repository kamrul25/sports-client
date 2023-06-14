import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Enrolled = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolled = [], } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="mx-4">
      <Helmet>
        <title>Sports | My Enrolled Classes</title>
      </Helmet>
      <SectionTitle subHeading="here" heading="Your all enrolled classes"></SectionTitle>
      <div className="mx-4 grid grid-cols-1 gap-6">
            {enrolled.map(data=>
            <div key={data._id} className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={data.image} className="h-[200px] w-[300px] rounded-lg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name: {data.className}</h2>
              <p>Instructor: {data.instructorName}</p>
              <p>Instructor Email: {data.instructorEmail}</p>
              <p>Price: {data.price}</p>
              <div className="card-actions justify-end">
                
              </div>
            </div>
          </div>    
             )}
      </div>
    </div>
  );
};

export default Enrolled;
