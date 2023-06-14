import { useForm } from "react-hook-form";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        console.log(imageResponse)
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const { name, price, seats, instructorName, instructorEmail } = data;
          const newClass = {
            name,
            price: parseFloat(price),
            seats: parseInt(seats),
            image: imgURL,
            instructorName,
            instructorEmail,
            status:"pending"
          };
          
          axiosSecure.post("/classes", newClass).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: `Image fail to upload!`,
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      });
  };
  return (
    <div className="w-full px-10 my-10">
      <SectionTitle
        subHeading="What's new"
        heading="Add a class"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-4 my-2">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered input-primary w-full "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold"> Image For Class</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered input-primary w-full "
            />
          </div>
        </div>
        <div className="flex items-center gap-4 my-2">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              defaultValue={user.displayName}
              readOnly
              {...register("instructorName", )}
              className="input input-bordered input-primary w-full "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Your Email </span>
            </label>
            <input
              type="text"
              defaultValue={user.email}
              readOnly
              {...register("instructorEmail", )}
              className="input input-bordered input-primary w-full "
            />
          </div>
        </div>
        <div className="flex items-center gap-4 my-2">
          <div className="form-control w-full mb-4">
            <label className="label font-semibold">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here about price"
              className="input input-bordered input-primary w-full "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label font-semibold">
              <span className="label-text font-semibold">Available Seats</span>
            </label>
            <input
              type="number"
              {...register("seats", { required: true })}
              placeholder="Type here about available seats"
              className="input input-bordered input-primary w-full "
            />
          </div>
        </div>

        <input
          className="btn btn-success mt-4"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddClass;
