import React, { useEffect, useState } from "react";
import { useGetAllPostQuery } from "../../../redux/services/StudentPostApi";
import Heading from "../../common/Heading";
import TableData from "../../common/TableData";
import Empty from "../../common/Empty";

const TotalStudentPosts = () => {
  const { data } = useGetAllPostQuery();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);
  return (
    <>
      <Heading
        text="All Students Posts"
        subtitle="You can see all students posts here."
      />
      {posts.length > 0 ? (
        <TableData data={posts} />
      ) : (
        <Empty title={"Nothing posted by students."} />
      )}
    </>
  );
};

export default TotalStudentPosts;
