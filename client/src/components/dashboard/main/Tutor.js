import React from "react";
import Heading from "../../common/Heading";
import MainStudentDashboardBox from "../../common/MainStudentDashboardBox";
import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useGetSingleTutorProposalQuery } from "../../../redux/services/ProposalApi";
import { useSelector } from "react-redux";

const Tutor = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { data } = useGetSingleTutorProposalQuery(currentUser?._id);
  return (
    <>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Heading
          text="All Your Posts"
          subtitle="You can see all your details about your proposal requests."
        />
        {/* <Button
          onClick={() => navigate("/dashboard/Post-Request")}
          sx={{ height: "40px" }}
          variant="contained"
          startIcon={<Add />}
        >
          Add Post
        </Button> */}
      </Stack>
      <MainStudentDashboardBox
        title={"Your Total Proposals"}
        total={data?.length}
      />
    </>
  );
};

export default Tutor;
