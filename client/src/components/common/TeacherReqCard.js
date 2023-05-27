import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import {
  useAcceptProposalMutation,
  useDeleteProposalMutation,
} from "../../redux/services/ProposalApi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TeacherReqCard = ({ postReqData }) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [AcceptPost, { isError, isLoading }] = useAcceptProposalMutation();
  const [DeletePost, inf] = useDeleteProposalMutation();
  const handleAccept = async () => {
    try {
      const res = await AcceptPost({
        proposalId: postReqData?._id,
        status: "ACCEPTED",
        studentId: currentUser?._id,
      });
      if (res?.data !== null) {
        toast.success("Request accepted successfully");
        navigate("/Accepted-proposal");
      } else {
        toast.error(res?.error?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await DeletePost(postReqData?._id);
      toast.success("Post deleted successfully");
      navigate("/Student-posts");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        p: "20px",
        backgroundColor: "#ddd",
        width: "350px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        color: "#444",
      }}
    >
      <Typography>
        <b>Teacher Name :</b> {postReqData?.tutor?.name}{" "}
      </Typography>
      <Typography>
        <b>Proposal Description :</b> {postReqData?.description}{" "}
      </Typography>
      <Stack flexDirection={"row"} mt={"10px"} gap={"10px"}>
        <Button
          onClick={handleAccept}
          size="small"
          variant="contained"
          sx={{ background: "#25BE4B", "&:hover": { background: "#25BE3B" } }}
        >
          Accept
        </Button>
        <Button
          onClick={handleDelete}
          size="small"
          variant="contained"
          sx={{ background: "#BE3525", "&:hover": { background: "#BE2525" } }}
        >
          Delete
        </Button>
      </Stack>
    </Box>
  );
};

export default TeacherReqCard;
