import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import { useGetAllPostQuery } from "../../../redux/services/StudentPostApi";
import StudentReqCard from "./StudentReq";
import { Box, TextField, useMediaQuery } from "@mui/material";
import Empty from "../../common/Empty";

const StudentsReq = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const { data } = useGetAllPostQuery({ refetchOnMountOrArgChange: true });
  const [posts, setPosts] = useState([]);
  const [searchSub, setSearchSub] = useState("");
  useEffect(() => {
    if (data) {
      const filteredData = data?.filter((item) =>
        item?.subject?.toLowerCase().includes(searchSub.toLowerCase())
      );
      setPosts(filteredData);
    }
  }, [data]);
  return (
    <>
      <Heading
        text={"All Students Request"}
        subtitle={"You can see all the students request here."}
      />
      {posts?.length > 0 ? (
        <>
          <TextField
            value={searchSub}
            onChange={(e) => setSearchSub(e.target.value)}
            variant="outlined"
            placeholder="Search by subject"
            size="small"
          />
          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(4,minmax(0,1fr))"
            justifyContent="space-between"
            rowGap="20px"
            columnGap="1.33%"
            sx={{
              "& > div ": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {posts
              ?.filter((item) =>
                item?.subject?.toLowerCase().includes(searchSub.toLowerCase())
              )
              ?.map((item, i) => (
                <StudentReqCard key={i} data={item} />
              ))}
          </Box>
        </>
      ) : (
        <Empty title={"Students have not posted any requets yet."} />
      )}
    </>
  );
};

export default StudentsReq;
