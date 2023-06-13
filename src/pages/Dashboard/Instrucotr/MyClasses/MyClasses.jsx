import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
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
          {/* row 1 */}
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
                  <button className="btn btn-success">Feedback</button>
                ) : (
                  <button className="btn btn-success" disabled>
                    Feedback
                  </button>
                )}
              </td>
              <td> {cla.price}</td>
              <td> {cla.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
