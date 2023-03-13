import HomePage from "@/pages/home/HomePage";
import Path from "@/utils/path/routes";
import { Route, Routes } from "react-router-dom";
import UserManagement from "../users/UserManagement";

const UnauthenticatedRoutes = () => {
  const { HOME, USERS } = Path;

  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={USERS} element={<UserManagement />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
