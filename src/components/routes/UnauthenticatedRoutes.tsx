import HomePage from "@/pages/home/HomePage";
import Path from "@/utils/path/routes";
import { Route, Routes } from "react-router-dom";
import Grade from "@components/manage/users/Grade";
import Manage from "@components/manage/users/Manage";
import WriterApply from "@components/manage/users/WriterApply";
import WriterManage from "@components/manage/users/WriterManage";
import NobelManagement from "@components/manage/novel/NobelManagement";
import Announce from "@components/manage/announce/Announce";

const UnauthenticatedRoutes = () => {
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
      <Route path={USERS} element={<Manage />} />
      <Route path={GRADE} element={<Grade />} />
      {/* 작가 신청,관리 */}
      <Route path={AUTH_WRITER_REQ} element={<WriterApply />} />

      <Route path={AUTH_WRITER_MANAGEMENT} element={<WriterManage />} />
      <Route path={AUTH_NOVEL_MANAGEMENT} element={<NobelManagement />} />
      <Route path={ANNOUNCE} element={<Announce />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
