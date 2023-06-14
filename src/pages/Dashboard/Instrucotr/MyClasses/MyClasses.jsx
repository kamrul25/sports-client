import { useContext, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [feedback, setFeedback] = useState("")
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = (cla) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/classes/${cla._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <SectionTitle
        subHeading="TESTIMONIALS"
        heading="Manage Your all Classes and read feedback"
      ></SectionTitle>
      <table className="table">
        <thead>
          <tr className="text-xl">
            <th></th>
            <th>Name</th>
            <th>Image</th>
            <th>Status</th>
            <th>Feedback</th>
            <th>Price</th>
            <th>Available Seats</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cla, index) => (
            <tr key={cla._id}>
              <th>{index + 1} </th>
              <td>{cla.name}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={cla.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td> {cla.status}</td>
              <td>
                {cla?.feedback ? (
                  <button className="btn btn-success"
                  onClick={()=>window.my_modal_3.showModal()}
                  ><span onClick={() => setFeedback(cla?.feedback)}>See Feedback</span></button>
                ) : (
                  <button className="btn btn-success" disabled>
                    Feedback
                  </button>
                )}
              </td>
              <td> {cla.price}</td>
              <td className="text-center"> {cla.seats}</td>
              <td>
                {cla?.status === "approved" ? (
                  <button
                    disabled
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                ) : (
                  <button
                    onClick={() => handleDelete(cla)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>


<dialog id="my_modal_3" className="modal">
  <form method="dialog" className="modal-box">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg">Feedback!</h3>
    <p className="py-4">{feedback}</p>
  </form>
</dialog>
    </div>
  );
};

export default MyClasses;
