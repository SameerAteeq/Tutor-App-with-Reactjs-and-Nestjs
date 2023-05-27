import {
  AddCard,
  CheckBox,
  Dashboard,
  Groups,
  Groups3,
  MenuBook,
  Person,
} from "@mui/icons-material";
import Main from "../components/dashboard/main/Main";
import Students from "../components/dashboard/students/Students";
import Teachers from "../components/dashboard/teachers/Teachers";
import Profile from "../components/dashboard/profile/Profile";
import StudentPosts from "../components/dashboard/studentData/StudentPosts";
import Proposals from "../components/dashboard/TutorData/Proposals";
import PostForm from "../components/dashboard/studentData/PostForm";
import TotalStudentPosts from "../components/dashboard/AdminData/TotalStudentPosts";
import StudentsReq from "../components/dashboard/TutorData/StudentsReq";
import SinglePost from "../components/dashboard/studentData/SinglePost";
import ApplyProposal from "../components/dashboard/TutorData/ApplyProposal";
import AceptedProposal from "../components/dashboard/studentData/AceptedProposal";
import TutorStudRelation from "../components/dashboard/AdminData/TutorStudRelation";

export const SideBarList = [
  {
    id: 1,
    title: "Main",
    icon: <Dashboard />,
    link: "",
    components: <Main />,
    tooltip: "Dashboard",
    show: ["TUTOR", "ADMIN", "STUDENT"],
    display: true,
  },
  {
    id: 84,
    title: "Profile",
    icon: <Person />,
    link: "Profile",
    components: <Profile />,
    tooltip: "Profile",
    show: ["TUTOR", "ADMIN", "STUDENT"],
    display: true,
  },
  {
    id: 2,
    title: "All Students",
    icon: <Groups />,
    link: "Students",
    components: <Students />,
    tooltip: "Students",
    show: ["ADMIN"],
    display: true,
  },
  {
    id: 3,
    title: "All Tutors",
    icon: <Groups3 />,
    link: "Teachers",
    components: <Teachers />,
    tooltip: "Teachers",
    show: ["ADMIN"],
    display: true,
  },

  {
    id: 5,
    title: "Posts",
    icon: <MenuBook />,
    link: "Student-posts",
    components: <StudentPosts />,
    tooltip: "Student-posts",
    show: ["STUDENT"],
    display: true,
  },
  {
    id: 6,
    title: "Proposals",
    icon: <MenuBook />,
    link: "Tutor-proposals",
    components: <Proposals />,
    tooltip: "Tutor-proposals",
    show: ["TUTOR"],
    display: true,
  },
  {
    id: 77,
    title: "Post Request",
    icon: <AddCard />,
    link: "Post-Request",
    components: <PostForm />,
    tooltip: "Post-Request",
    show: ["STUDENT"],
    display: true,
  },
  {
    id: 56,
    title: "Student Requests",
    icon: <AddCard />,
    link: "Student-Request",
    components: <TotalStudentPosts />,
    tooltip: "Student-Request",
    show: ["ADMIN"],
    display: true,
  },
  {
    id: 33,
    title: "Student Requests",
    icon: <AddCard />,
    link: "Stu-Request",
    components: <StudentsReq />,
    tooltip: "Stu-Request",
    show: ["TUTOR"],
    display: true,
  },
  {
    id: 14,
    title: "Student Post",
    icon: <AddCard />,
    link: "Student-posts/:id",
    components: <SinglePost />,
    tooltip: "Student-Post",
    show: ["STUDENT"],
    display: false,
  },
  {
    id: 12,
    title: "Student Post",
    icon: <AddCard />,
    link: "Stu-Request/:id/user/:userId",
    components: <ApplyProposal />,
    tooltip: "Student-Post",
    show: ["TUTOR"],
    display: false,
  },
  {
    id: 12,
    title: "Accepted Proposals",
    icon: <CheckBox />,
    link: "Accepted-proposal",
    components: <AceptedProposal />,
    tooltip: "Accepted-proposal",
    show: ["STUDENT"],
    display: true,
  },
  {
    id: 166,
    title: "Tutor and Students",
    icon: <CheckBox />,
    link: "Tutor-Student",
    components: <TutorStudRelation />,
    tooltip: "Tutor-Student",
    show: ["ADMIN"],
    display: true,
  },
];

export const studentsPostData = [
  {
    id: 1,
    subject: "Chemisty",
    fee: 200,
  },
  {
    id: 1,
    subject: "Math",
    fee: 200,
  },
  {
    id: 1,
    subject: "Urdu",
    fee: 200,
  },
  {
    id: 1,
    subject: "Chemisty",
    fee: 200,
  },
  {
    id: 1,
    subject: "Chemisty",
    fee: 200,
  },
  {
    id: 1,
    subject: "Chemisty",
    fee: 200,
  },
];

export const subjects = [
  {
    id: 1,
    subject: "Chemistry",
  },
  {
    id: 2,
    subject: "Physics",
  },
  {
    id: 3,
    subject: "Math",
  },
  {
    id: 4,
    subject: "Biology",
  },
  {
    id: 5,
    subject: "Data Structure",
  },
  {
    id: 6,
    subject: "Urdu",
  },
  {
    id: 7,
    subject: "Science",
  },
  {
    id: 8,
    subject: "Programming",
  },
];
