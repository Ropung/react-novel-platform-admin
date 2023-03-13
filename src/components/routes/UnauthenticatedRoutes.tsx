import HomePage from "@/pages/home/HomePage";
import Path from "@/utils/path/routes";
import { Route, Routes } from "react-router-dom";

const UnauthenticatedRoutes = () => {
  const { HOME } = Path;

  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
