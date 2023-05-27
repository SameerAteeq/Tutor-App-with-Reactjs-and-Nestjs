import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import { useGetUsersQuery } from "../../../redux/services/userApi";
import UserTable from "../../common/UserTable";
import Empty from "../../common/Empty";

const Students = () => {
  const { data } = useGetUsersQuery();
  const [users, setUser] = useState([]);
  useEffect(() => {
    if (data) {
      const filterTutor = data?.filter((item) => item.role === "STUDENT");
      setUser(filterTutor);
    }
  }, [data]);
  return (
    <>
      <Heading
        text="All Students"
        subtitle="You can see all Students accounts here."
      />
      {users?.length > 0 ? (
        <UserTable data={users} />
      ) : (
        <Empty title={"No Students Available"} />
      )}
    </>
  );
};

export default Students;
