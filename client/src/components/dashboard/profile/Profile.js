import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Heading from "../../common/Heading";

const Profile = () => {
  return (
    <Box>
      <Heading
        text="Your Profile"
        subtitle="You can see and update your profile."
      />

      <form>
        <Stack flexDirection="column" gap="10px">
          <Stack flexDirection="row">
            <Box width="120px" height="120px">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Button
              sx={{ textTransform: "capitalize" }}
              variant="text"
              component="label"
            >
              Edit profile
              <input
                name="file"
                //   onChange={(e) => setFieldValue("file", e.target.files[0])}
                hidden
                type="file"
              />
            </Button>
          </Stack>

          <TextField
            sx={{ marginBottom: "10px" }}
            fullWidth
            label="Name"
            type="text"
            variant="outlined"
            placeholder="Enter Your Name"
          />
          <TextField
            sx={{ marginBottom: "10px" }}
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            placeholder="Enter Your Email"
          />
          <Button variant="contained">Update</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Profile;
