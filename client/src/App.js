import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./route/PrivateRoute";
import ApplyProposal from "./components/dashboard/TutorData/ApplyProposal";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/*" element={<Dashboard />} />
            <Route path="/proposal/:id" element={<ApplyProposal />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
