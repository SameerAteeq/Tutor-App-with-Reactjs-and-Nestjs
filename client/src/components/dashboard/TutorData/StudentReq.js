import { ArrowDownward } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentReqCard = ({ data }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDataId, setSelectedDataId] = useState(null);

  return (
    <>
      <Card
        sx={{
          backgroundImage: "none",
          bgcolor: "lightgray",
          borderRadius: "0.55rem",
        }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600 }}
            textTransform="capitalize"
            color={"#333"}
            gutterBottom
          >
            {data?.subject} Teacher
          </Typography>
          <Typography variant="body1" component="div">
            Required for the {data?.subject} subject, You can see the
            requirements and apply for the position.
          </Typography>
          <Typography sx={{ mb: "1.5rem" }}>
            <strong style={{ color: "#333", fontSize: "15px" }}>Fee:</strong> $
            {Number(data?.fee).toFixed(2)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            endIcon={<ArrowDownward />}
            variant="outlined"
            size="small"
            sx={{
              textTransform: "capitalize",
              color: "#333",
              background: "#ddd",
            }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            See More
          </Button>
        </CardActions>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography mb={"4px"}>{data?.description}</Typography>
            <Button
              onClick={() => navigate(`${data?._id}/user/${data?.userId}`)}
              variant="contained"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Apply
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default StudentReqCard;
