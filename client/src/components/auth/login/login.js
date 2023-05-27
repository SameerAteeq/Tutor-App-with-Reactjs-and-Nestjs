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
import LoginImage from "../../../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../redux/services/userApi";
import { useDispatch, useSelector } from "react-redux";
import { getToken, getUser } from "../../../redux/slices/user-slice/userSlice";
import { toast } from "react-hot-toast";
import Loader from "../../common/Loader";

const SignIn = () => {
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [LoginUser, { isError, isLoading, isSuccess }] = useLoginUserMutation();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //LOGIN USER
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    try {
      const res = await LoginUser(userData);
      if (res?.data?.token && res?.data?.userData) {
        navigate("/");
        dispatch(getToken(res?.data?.token));
        dispatch(getUser(res?.data?.userData));
      } else {
        toast.error(res?.error?.data?.message);
      }
    } catch (error) {
      console.log(error.data.message, "err");
      toast.error(error.data.message);
    }
  };

  if (isLoading) return <Loader />;
  return (
    <Box display="flex" gap="10px" sx={{ height: "100vh", m: "0.7rem" }}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <img
          height="100%"
          width="100%"
          src={LoginImage}
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
            Login
          </Typography>

          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: "10px" }}
            fullWidth
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email"
            type="email"
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginBottom: "10px" }}
          >
            SIGN IN
          </Button>
          <Stack direction="row" gap={1}>
            <Typography>Don't have an account?</Typography>
            <Typography
              component={Link}
              color="primary"
              style={{ textDecoration: "none" }}
              to={"/register"}
            >
              Register
            </Typography>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default SignIn;
