import { Box, Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import Heading from "../../common/Heading";
import { subjects } from "../../../utils/data";
import { toast } from "react-hot-toast";
import { useCreatePostMutation } from "../../../redux/services/StudentPostApi";
import { useNavigate } from "react-router-dom";
const PostForm = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [fee, setFee] = useState();
  const [createPost, { isLoading, isSuccess }] = useCreatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (subject === "" || description === "" || fee === "") {
      return toast.error("All fields are required");
    } else if (fee < 0) {
      return toast.error("Enter correct amount");
    }
    const subjectFee = Number(fee);
    const data = {
      subject,
      description,
      fee: subjectFee,
    };
    try {
      const res = await createPost(data);
      if (res?.data) {
        setSubject("");
        setDescription("");
        setFee("");
        navigate("/Student-posts");
        toast.success("Post created successfully");
        console.log(res);
      } else {
        toast.error(res?.error?.data?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Box>
      <Heading
        text={"Post Subject Request"}
        subtitle={"You can post request for learning desired subject."}
      />
      <form onSubmit={handleSubmit}>
        <TextField
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          select
          sx={{ marginBottom: "10px" }}
          fullWidth
          label="Subject"
          variant="outlined"
          placeholder="Enter Subject Name"
        >
          {subjects?.map((sub, ind) => (
            <MenuItem value={sub?.subject} key={ind}>
              {sub?.subject}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginBottom: "10px" }}
          fullWidth
          label="Description"
          variant="outlined"
          type="text"
          multiline
          maxRows={4}
          placeholder="Description about the subject"
        />
        <TextField
          value={fee}
          onChange={(e) => setFee(e.target.value)}
          sx={{ marginBottom: "10px" }}
          fullWidth
          label="Fee"
          type="number"
          variant="outlined"
          placeholder="Enter Fee"
          InputProps={{
            inputProps: { min: 1 },
          }}
        />
        <Button type="submit" variant="contained">
          {isLoading ? "Uploading..." : "Post"}
        </Button>
      </form>
    </Box>
  );
};

export default PostForm;
