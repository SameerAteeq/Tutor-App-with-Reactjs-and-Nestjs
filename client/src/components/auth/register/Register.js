import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RegisterImage from "../../../images/register.png";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../../redux/services/userApi";
import { toast } from "react-hot-toast";
import Loader from "../../common/Loader";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [createUser, { isLoading, isError, isSuccess }] =
    useCreateUserMutation();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || role === "") {
      return toast.error("All fields are required");
    }
    const data = {
      name,
      email,
      password,
      role,
    };
    try {
      const res = await createUser(data);
      if (res?.data) {
        toast.success("User created Successfully");
        navigate("/login");
      } else {
        toast.error(res?.error?.data?.message);
      }
      console.log(res);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  if (isLoading) return <Loader />;
  return (
    <Box display="flex" gap="10px" sx={{ height: "100vh", m: "0.7rem" }}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <img
          height="100%"
          width="100%"
          src={RegisterImage}
          style={{
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>

      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100%"
        sx={{ mx: { xs: "1rem", md: "0" } }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            color="#444"
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            mb="10px"
          >
            SIGN UP
          </Typography>

          <TextField
            sx={{ marginBottom: "10px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            label="Name"
            type="text"
            variant="outlined"
            placeholder="Enter Your Name"
          />
          <TextField
            sx={{ marginBottom: "10px" }}
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
            type="email"
            placeholder="Enter Your Email"
          />

          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: "10px" }}
            fullWidth
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            label="Password"
          />

          <TextField
            value={role}
            onChange={(e) => setRole(e.target.value)}
            sx={{ marginBottom: "10px" }}
            select
            fullWidth
            id="outlined-basic"
            placeholder="Select your role"
            label="Role"
          >
            <MenuItem value="STUDENT" key="STUDENT">
              STUDENT
            </MenuItem>
            <MenuItem value="TUTOR" key="TUTOR">
              TUTOR
            </MenuItem>
          </TextField>

          <Button type="submit" fullWidth variant="contained">
            Sign Up
          </Button>

          <Stack direction="row" gap={1} mt={"10px"}>
            <Typography>Already have an account?</Typography>
            <Typography
              component={Link}
              color="primary"
              style={{ textDecoration: "none" }}
              to={"/login"}
            >
              Sign In
            </Typography>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default Register;
