import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageClasses = () => {

  const [classId, setClassId] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes`);
      return res.data;
    },
  });
  //

  const handleAction = (cla, status) => {
    // fetch(`https://sports-server-two.vercel.app/classses/admin/${cla._id}`, {
    //   method: "PATCH",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ status: status }),
    // })
    fetch(`http://localhost:5000/classes/admin/${cla._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Now status is  ${
              status === "approved" ? "approved" : "denied"
            } !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleFeedback = () => {
    fetch(`http://localhost:5000/classes/admin/${classId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ feedback: feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Send Feedback Successfully!`,
            showConfirmButton: false,
            timer: 1500,
          });
          setFeedback("");
        }
      });
  };
  return (
    <div>
      <SectionTitle
        subHeading="TESTIMONIALS"
        heading="Manage All users Classes and give feedback"
      ></SectionTitle>
      <table className="table">
        <thead>
          <tr className="text-xl">
            <th></th>
            <th>Name</th>
            <th>Image</th>
            <th>Instructor</th>
            <th>Email</th>
            <th>Status</th>
            <th></th>
            <th>Feedback</th>
            <th>Price</th>
            <th>Available Seats</th>
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
              <td>{cla.instructorName}</td>
              <td>{cla.instructorEmail}</td>
              <td> {cla.status}</td>
              <td className="flex items-center gap-3">
                {cla.status === "approved" || cla.status === " denied" ? (
                  <>
                    <button className="btn btn-success" disabled>
                      Approved
                    </button>
                    <button className="btn btn-success" disabled>
                      Denied
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-success"
                      onClick={() => handleAction(cla, "approved")}
                    >
                      Approved
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => handleAction(cla, "denied")}
                    >
                      Denied
                    </button>
                  </>
                )}
              </td>
              <td>
                {cla.status === "pending" ? (
                  <button className="btn btn-success" disabled>
                    Send Feedback
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() => window.my_modal_1.showModal()}
                  >
                    <span onClick={() => setClassId(cla._id)}>
                      Send Feedback
                    </span>
                  </button>
                )}
              </td>
              <td> {cla.price}</td>
              <td className="text-center"> {cla.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Write your feedback!</h3>
          <textarea
            onChange={(event) => setFeedback(event.target.value)}
            className="textarea textarea-primary w-full my-3"
            placeholder="write your feedback here"
          ></textarea>
          <div className="modal-action">
            <button className="btn btn-success" onClick={handleFeedback}>
              Send
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ManageClasses;

/* 

  
*/
