import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios(`https://sports-server-two.vercel.app/users`).then((data) => {
      console.log(data.data);
      setUsers(data.data);
    });
  }, []);
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
                  <button className="btn btn-success" >
                    Admin
                  </button>               
                )}
                {user.role === "instructor" ? (
                  <button className="btn btn-success" disabled>
                    Instructor
                  </button>
                ) : (
                  <button className="btn btn-success" >
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
