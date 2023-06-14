import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery({
    queryKey: ["classes", "approved"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/approved`);
      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Sports | Classes</title>
      </Helmet>
      <div>{classes.length}</div>
    </div>
  );
};

export default Classes;
