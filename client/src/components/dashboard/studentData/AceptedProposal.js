import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import moment from "moment/moment";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { useGetAllMyProposalsQuery } from "../../../redux/services/ProposalApi";
import Loader2 from "../../common/Loader2";
import Empty from "../../common/Empty";
const AceptedProposal = () => {
  const { data, isLoading } = useGetAllMyProposalsQuery("ACCEPTED");
  const [proposals, setProposals] = useState([]);
  useEffect(() => {
    if (data) {
      setProposals(data);
    }
  }, [data]);

  return (
    <>
      <Heading
        text={"Accepted Proposals"}
        subtitle={"You can see all accepted teachers proposals"}
      />
      {!data?.length > 0 ? (
        <Empty title={"You have not accept any proposal yet."} />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#ddd", fontWeight: "bold" }}>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Tutor</TableCell>
                <TableCell>Tutor Email</TableCell>
                <TableCell>Time</TableCell>
                <TableCell align="right">Fee</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {proposals?.map((item, index) => {
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
                    <TableCell>{item?.tutor?.email}</TableCell>
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
      )}
    </>
  );
};

export default AceptedProposal;
