import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      // const res = await   axios(`https://sports-server-two.vercel.app/users`)
      // return res.data;
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleAction = (user, role) => {
    fetch(`https://sports-server-two.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ role: role }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is ${
              role === "admin" ? "an Admin" : "a instructor"
            } Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>Sports | All Users</title>
      </Helmet>
      <div></div>

      <table className="table">
        {/* head */}
        <thead className="text-xl">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="space-x-2">
                {user.role === "admin" ? (
                  <button className="btn btn-success" disabled>
                    Admin
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() => handleAction(user, "admin")}
                  >
                    Admin
                  </button>
                )}
                {user.role === "instructor" ? (
                  <button className="btn btn-success" disabled>
                    Instructor
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() => handleAction(user, "instructor")}
                  >
                    Instructor
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
