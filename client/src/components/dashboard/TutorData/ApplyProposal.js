import React, { useState } from "react";
import Heading from "../../common/Heading";
import { Button, TextField, useTheme } from "@mui/material";
import {
  useCreateProposalMutation,
  useGetAllMyProposalsQuery,
} from "../../../redux/services/ProposalApi";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const ApplyProposal = () => {
  const navigate = useNavigate();
  const { id, userId } = useParams();
  const theme = useTheme();

  const [createProposal, { isLoading, isSuccess }] =
    useCreateProposalMutation();

  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (description === "") {
      return toast.error("Description is required");
    }
    const data = {
      description,
      post: id,
      status: "PENDING",
      student: userId,
    };
    try {
      const res = await createProposal(data);
      if (res?.data) {
        toast.success("Proposal send successfully");
        console.log(res, "resp");
        setDescription("");
        navigate("/Tutor-proposals");
      } else {
        toast.error(res?.error?.data?.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Heading
        text={"Apply for the post"}
        subtitle={"You can apply for this post."}
      />

      <form onSubmit={handleSubmit}>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginBottom: "10px" }}
          fullWidth
          label="Description"
          variant="outlined"
          type="text"
          multiline
          rows={8}
          placeholder="Describe about your proposal"
        />
        <Button type="submit" variant="contained">
          {isLoading ? "Uploading" : "Apply"}
        </Button>
      </form>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              variant="h6"
              mb="10px"
              color={theme.palette.primary.main}
            >
              Apply For the proposal
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ marginBottom: "10px" }}
                fullWidth
                label="Description"
                variant="outlined"
                type="text"
                multiline
                rows={6}
                placeholder="Describe about your proposal"
              />
              <Button type="submit" variant="contained">
                {isLoading ? "Uploading" : "Apply"}
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal> */}

      {/* <Heading text={"Apply for the proposal"} />
      <form>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginBottom: "10px" }}
          fullWidth
          label="Description"
          variant="outlined"
          type="text"
          multiline
          rows={6}
          placeholder="Describe about your proposal"
        />
      </form>
      <Button>Post Proposal</Button> */}
    </>
  );
};

export default ApplyProposal;
