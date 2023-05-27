import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import { useParams } from "react-router-dom";
import { useSinglePostRequestQuery } from "../../../redux/services/ProposalApi";
import { useGetSinglePostQuery } from "../../../redux/services/StudentPostApi";
import { Stack, Typography } from "@mui/material";
import TeacherReqCard from "../../common/TeacherReqCard";
import Empty from "../../common/Empty";

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const { data, refetch } = useSinglePostRequestQuery(id);
  const { data: student_post } = useGetSinglePostQuery(id);

  // useEffect(() => {
  //   refetch();
  // }, []);
  return (
    <>
      <Heading
        text={"Post Detail"}
        subtitle={"You can see all post request and details here."}
      />

      <Typography variant="h6">
        <b>SUBJECT :</b> {student_post?.subject}{" "}
      </Typography>
      <Typography variant="h6">
        <b>Description :</b> {student_post?.description}{" "}
      </Typography>
      <Typography variant="h6">
        <b>Fee :</b> ${Number(student_post?.fee).toFixed(2)}{" "}
      </Typography>

      {data?.length > 0 ? (
        <>
          <Typography variant="h5" mt={"40px"} mb={"20px"}>
            Post Request
          </Typography>
          <Stack flexDirection={"row "} gap={"10px"} flexWrap={"wrap"}>
            {data
              ?.filter((item) => item.status === "PENDING")
              ?.map((postData, i) => (
                <TeacherReqCard key={i} postReqData={postData} />
              ))}
          </Stack>
        </>
      ) : (
        <Empty title="This post does not have any request." />
      )}
    </>
  );
};

export default SinglePost;
