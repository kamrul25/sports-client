import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext,  } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Classes = () => {
  const { user, userRole } = useContext(AuthContext);
  const location = useLocation();

  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", "approved"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/approved`);
      return res.data;
    },
  });

  const handleNotUser = () => {
    Swal.fire("You have to log in first to view details !!");
    return (
      <Navigate to="/signIn" state={{ from: location }} replace></Navigate>
    );
  };

  const handleSelected =(cla)=>{
    const {instructorName, instructorEmail, name, _id, image, price} = cla
    const selectedData = {classId: _id, className: name, image, instructorName, instructorEmail, userEmail: user?.email, price}
    axiosSecure.post("/selected", selectedData).then((data) => {
      if (data.data.insertedId) {
       refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class added successfully in your dashboard!",
          showConfirmButton: false,
          timer: 1500,
        });
      }else{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Already Selected!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
  return (
    <div className=" mx-3 md:max-w-2xl lg:max-w-6xl md:mx-auto">
      <Helmet>
        <title>Sports | Classes</title>
      </Helmet>
      <SectionTitle
        subHeading="here all approved classes"
        heading="Selected any class dependence your necessity"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {classes.map((cla) => (
          <div key={cla._id} className={ cla.seats === 0 ?"card bg-red-500 shadow-xl border border-primary": "card bg-base-100 shadow-xl border border-primary"}>
            <figure className="w-full h-[300px]">
              <img
                src={cla.image}
                alt="Instructor"
                className=" w-full h-full"
              />
            </figure>
            <div className="m-2">
              <h2 className="card-title">
                <span className="text-gray-500">Name</span>: {cla.name}{" "}
              </h2>
              <h2 className="card-title">
                <span className="text-gray-500">Instructor</span>:{" "}
                {cla.instructorName}
              </h2>
              <div className="card-title flex justify-between items-center gap-4">
                <p>
                  <span className="text-gray-500">Available Seats</span>:{" "}
                  {cla.seats}
                </p>
                <p>
                  <span className="text-gray-500">Price</span>: {cla.price}
                </p>
              </div>
              <div className="card-actions justify-end my-4">
                {user ? (
                  userRole === "admin" || userRole === "instructor" || cla.seats === 0 ? (
                    <button className="btn btn-primary" disabled>
                      Selected
                    </button>
                  ) : (
                    <button className="btn btn-primary" onClick={() =>handleSelected(cla)}>Selected</button>
                  )
                ) : (
                  <Link
                    to="/signIn"
                    className="btn btn-primary"
                    onClick={handleNotUser}
                  >
                    Selected
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
