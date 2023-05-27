import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import { Stack } from "@mui/material";
import MainDaishboardCard from "../../common/MainDaishboardCard";
import { useGetUsersQuery } from "../../../redux/services/userApi";

const Admin = () => {
  const { data } = useGetUsersQuery();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  const AllTutors = users.filter((user) => user.role === "TUTOR").length;
  const AllStudent = users.filter((user) => user.role === "STUDENT").length;
  return (
    <>
      <Heading
        text="All Details"
        subtitle="You can see all details about your users here. "
      />
      <Stack flexDirection="row" flexWrap="wrap" gap="10px">
        <MainDaishboardCard title="Total Students" total={AllStudent} />
        <MainDaishboardCard title="Total Tutors" total={AllTutors} />
      </Stack>
    </>
  );
};

export default Admin;
