import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios(`https://sports-server-two.vercel.app/users`).then((data) => {
      setUsers(data.data);
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Sports | All Users</title>
      </Helmet>
      <div>
        {users.length}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorem consequuntur, expedita perferendis beatae quaerat nihil repellendus placeat. Commodi voluptatibus hic eum, velit cumque assumenda. Facere nobis soluta autem, tempore corporis quidem labore veniam doloremque ullam, iure eius ut? Eos error nulla hic pariatur ut eius ea sint ex aperiam debitis vero illum, eaque inventore laboriosam, similique dignissimos labore magni rerum. Dolorum ducimus id doloremque dolor consequatur at nobis nisi omnis tempora ipsum laudantium quidem vero quibusdam libero error facere voluptatibus aliquid, architecto perspiciatis sunt debitis delectus inventore. Corporis placeat error quos dolore facere tempora excepturi dignissimos consequatur nihil magni minima molestiae vel repellat quo impedit, distinctio ab similique delectus quod sunt. Hic fuga quam animi harum tempore blanditiis odio id? Aperiam impedit dolor, quo neque veniam sunt, eaque numquam tempora rem soluta aspernatur deserunt maiores quae quisquam recusandae distinctio, iure libero incidunt hic debitis voluptatem odit pariatur? Sit, veniam?</p>
      </div>
    </div>
  );
};

export default ManageUsers;
