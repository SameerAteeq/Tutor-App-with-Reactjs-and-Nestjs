import React, { useState } from "react";
import { studentsPostData } from "../../../utils/data";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import Heading from "../../common/Heading";
import { Delete, Edit } from "@mui/icons-material";
import { useGetAllMyProposalsQuery } from "../../../redux/services/ProposalApi";
import Empty from "../../common/Empty";

const Proposals = () => {
  const [status, setStatus] = useState("PENDING");
  const { data } = useGetAllMyProposalsQuery(status);
  console.log(data);

  const handleChange = () => {
    setStatus((prevStatus) =>
      prevStatus === "PENDING" ? "ACCEPTED" : "PENDING"
    );
  };
  return (
    <>
      <Heading
        text="All Proposals"
        subtitle="You can see all your proposals here."
      />
      <Box position={"relative"} mt={"70px"}>
        <Stack
          position={"absolute"}
          right={"0"}
          top={"-40px"}
          flexDirection={"row"}
          alignItems={"center"}
          textAlign={"end"}
        >
          <Typography>Pending</Typography>
          <Switch
            checked={status === "ACCEPTED"}
            onChange={handleChange}
            color="primary"
          />
          <Typography>Accepted</Typography>
        </Stack>
      </Box>
      {data?.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#ddd", fontWeight: "bold" }}>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="center">Subject</TableCell>
                <TableCell align="center">Student Name</TableCell>
                <TableCell>Fee</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => {
                return (
                  <TableRow
                    hover
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell scope="row">{index + 1}</TableCell>
                    <TableCell align="center">{item?.post?.subject}</TableCell>
                    <TableCell align="center">{item?.student?.name}</TableCell>
                    <TableCell>${item?.post?.fee}</TableCell>
                    <TableCell align="right">{item?.status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Empty
          title={
            status === "PENDING"
              ? "You have not any pending proposal"
              : "You have not any accepted proposal"
          }
        />
      )}
    </>
  );
};

export default Proposals;
