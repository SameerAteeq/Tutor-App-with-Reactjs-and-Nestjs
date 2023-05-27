import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import MainStudentDashboardBox from "../../common/MainStudentDashboardBox";
import MainDaishboardCard from "../../common/MainDaishboardCard";
import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useGetAllPostQuery } from "../../../redux/services/StudentPostApi";
import { useSelector } from "react-redux";
import Empty from "../../common/Empty";

const Student = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const { data } = useGetAllPostQuery();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (data) {
      const userPost = data.filter((post) => post.userId === currentUser._id);
      setPosts(userPost);
    }
  }, [data]);
  return (
    <>
      <Stack
        flexDirection="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        mb={"14px"}
      >
        <Heading
          text="All Your Posts"
          subtitle="You can see all your details about your subjects requests."
        />
        <Button
          onClick={() => navigate("/Post-Request")}
          sx={{ height: "40px" }}
          variant="contained"
          startIcon={<Add />}
        >
          Add Post
        </Button>
      </Stack>
      {posts?.length > 0 ? (
        <MainStudentDashboardBox
          title={"Your Total Subject Posts"}
          total={posts?.length}
        />
      ) : (
        <Empty title="You have not posted any request yet." />
      )}
    </>
  );
};

export default Student;
