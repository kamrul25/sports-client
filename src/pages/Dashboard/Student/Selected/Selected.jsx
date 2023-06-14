import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const Selected = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: selected = [], refetch } = useQuery({
    queryKey: ["selected", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selected/${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = (data) => {
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
        axiosSecure.delete(`/selected/${data._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  // const handlePayment = (data) => {
  //   const {
  //     classId,
  //     price,
  //     userEmail,
  //     image,
  //     instructorEmail,
  //     instructorName,
  //     className,
  //     enrolled, seats
  //   } = data;
  //   const paymentData = {
  //     classId,
  //     price,
  //     userEmail,
  //     image,
  //     instructorEmail,
  //     instructorName,
  //     className,enrolled, seats
  //   };
  //   console.log(paymentData)
  //   .then((res) => {

  //   });
  // };

  const handlePayment = (data) => {
    const {
      classId,
      price,
      userEmail,
      image,
      instructorEmail,
      instructorName,
      className,
      enrolled,
      seats,
    } = data;
    const paymentData = {
      classId,
      price,
      userEmail,
      image,
      instructorEmail,
      instructorName,
      className,
      enrolled,
      seats,
    };
    const update = { enrolled: enrolled, seats: seats };
    fetch(`http://localhost:5000/classes/payment/${classId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          axiosSecure.post("/payment", paymentData).then((res) => {
            if (res.data.insertedId) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Payment successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }else {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Already Payment",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        } 
      });
  };
  return (
    <div className="mx-4">
      <Helmet>
        <title>Sports |My Selected Classes</title>
      </Helmet>
      <SectionTitle
        subHeading="your all selected classes"
        heading="Places confirm your selection"
      ></SectionTitle>
      <div className="grid grid-clos-1 gap-4">
        {selected.map((data) => (
          <div key={data._id} className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img
                src={data.image}
                className="h-[200px] w-[300px] rounded-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name: {data.className}</h2>
              <p>Instructor: {data.instructorName}</p>
              <p>Instructor Email: {data.instructorEmail}</p>
              <p>Price: {data.price}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => handlePayment(data)}
                >
                  Pay
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(data)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selected;
