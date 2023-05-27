import React from "react";
import Heading from "../../common/Heading";
import moment from "moment/moment";
import Empty from "../../common/Empty";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useGetAllProposalByAdminQuery } from "../../../redux/services/ProposalApi";

const TutorStudRelation = () => {
  const { data } = useGetAllProposalByAdminQuery();
  return (
    <>
      <Heading
        text={"All Connections"}
        subtitle={"You can see all tutor and student connection here."}
      />

      {data?.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#ddd", fontWeight: "bold" }}>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Tutor</TableCell>
                <TableCell>Student</TableCell>
                <TableCell>Time</TableCell>
                <TableCell align="right">Fee</TableCell>
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
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell>{item?.post?.subject}</TableCell>
                    <TableCell>{item?.tutor?.name}</TableCell>
                    <TableCell>{item?.student?.name}</TableCell>
                    <TableCell>
                      {moment(item?.createdAt).format("MMMM D, YYYY")}
                    </TableCell>
                    <TableCell align="right">{item?.post?.fee}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Empty title={"Students and teachers have not connected yet. "} />
      )}
    </>
  );
};

export default TutorStudRelation;
