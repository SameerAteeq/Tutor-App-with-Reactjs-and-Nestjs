import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal";
const TableData = ({ data }) => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDel = (id) => {
    setOpen(true);
    setSelectedId(id);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#ddd", fontWeight: "bold" }}>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Fee</TableCell>
              <TableCell align="right">Action</TableCell>
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
                  <TableCell>{item.subject}</TableCell>
                  <TableCell>{item.fee}</TableCell>

                  <TableCell align="right">
                    <Tooltip title="View">
                      <IconButton onClick={() => navigate(`${item?._id}`)}>
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDel(item?._id)}>
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteModal {...{ open, setOpen, selectedId }} />
    </>
  );
};

export default TableData;
