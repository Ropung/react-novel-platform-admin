import HomePage from "@/pages/home/HomePage";
import Path from "@/utils/path/routes";
import { Route, Routes } from "react-router-dom";
import UserGradeManagement from "../users/UserGradeManagement";
import UserManagement from "../users/UserManagement";
import UserAuthorWriterManagement from "../users/UserAuthorWriterManagement";
import UserAuthorWriterRequest from "../users/UserAuthorWriterRequest";
import NobelManagement from "../novel/NobelManagement";
import Announcement from "../announcement/Announcement";

const ProtectedRoutes = () => {
  const {
    HOME,
    USERS,
    GRADE,
    AUTH_WRITER_REQ,
    AUTH_WRITER_MANAGEMENT,
    AUTH_NOVEL_MANAGEMENT,
    ANNOUNCE,
  } = Path;

  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={USERS} element={<UserManagement />} />
      <Route path={GRADE} element={<UserGradeManagement />} />
      {/* 작가 신청,관리 */}
      <Route path={AUTH_WRITER_REQ} element={<UserAuthorWriterRequest />} />
      <Route
        path={AUTH_WRITER_MANAGEMENT}
        element={<UserAuthorWriterManagement />}
      />
      <Route path={AUTH_NOVEL_MANAGEMENT} element={<NobelManagement />} />
      <Route path={ANNOUNCE} element={<Announcement />} />
    </Routes>
  );
};

export default ProtectedRoutes;
