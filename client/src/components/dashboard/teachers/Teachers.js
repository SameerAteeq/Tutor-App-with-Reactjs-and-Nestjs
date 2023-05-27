import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";

import { useGetUsersQuery } from "../../../redux/services/userApi";
import UserTable from "../../common/UserTable";
import Empty from "../../common/Empty";

const Teachers = () => {
  const { data } = useGetUsersQuery();
  const [users, setUser] = useState([]);
  useEffect(() => {
    if (data) {
      const filterTutor = data?.filter((item) => item.role === "TUTOR");
      setUser(filterTutor);
    }
  }, [data]);
  return (
    <>
      <Heading
        text="All Teachers"
        subtitle="You can see all teachers accounts here."
      />
      {users?.length > 0 ? (
        <UserTable data={users} />
      ) : (
        <Empty title={"No Tutors Available"} />
      )}
    </>
  );
};

export default Teachers;
