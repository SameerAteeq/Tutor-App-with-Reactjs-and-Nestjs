import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import MainDaishboardCard from "../../common/MainDaishboardCard";
import { useGetUsersQuery } from "../../../redux/services/userApi";
import { useSelector } from "react-redux";
import Admin from "./Admin";
import Student from "./Student";
import Tutor from "./Tutor";

const Main = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const _renderPages = () => {
    switch (currentUser?.role) {
      case "ADMIN":
        return <Admin />;
      case "STUDENT":
        return <Student />;

      case "TUTOR":
        return <Tutor />;

      default:
        return <div />;
    }
  };

  return (
    <Box>
      <Typography color="#222" variant="h6" mb="15px">
        Welcome, <span style={{ fontWeight: 600 }}>{currentUser?.name}</span>
      </Typography>

      {_renderPages()}
    </Box>
  );
};

export default Main;
