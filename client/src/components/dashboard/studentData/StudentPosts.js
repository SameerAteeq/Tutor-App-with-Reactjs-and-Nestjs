import React, { useEffect, useState } from "react";

import Heading from "../../common/Heading";

import { useSelector } from "react-redux";
import { useGetAllPostQuery } from "../../../redux/services/StudentPostApi";
import Empty from "../../common/Empty";
import TableData from "../../common/TableData";

const StudentPosts = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { data } = useGetAllPostQuery({
    refetchOnMountOrArgChange: true,
  });
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (data) {
      const userPost = data.filter((post) => post.userId === currentUser._id);
      setPosts(userPost);
    }
  }, [data]);

  return (
    <>
      <Heading text="All Posts" subtitle="You can see all your posts here." />
      {posts?.length > 0 ? (
        <TableData data={posts} />
      ) : (
        <Empty
          title={"You don't have any posted request"}
          btnText={"Add Now"}
        />
      )}
    </>
  );
};

export default StudentPosts;
