import HomePage from "@/pages/home/HomePage";
import Path from "@/utils/path/routes";
import { Route, Routes } from "react-router-dom";
import Grade from "@manage/users/Grade";
import Manage from "@manage/users/Manage";
import WriterApply from "@manage/users/WriterApply";
import WriterManage from "@manage/users/WriterManage";
import NobelManagement from "@manage/novel/NobelManagement";
import Announce from "@manage/announce/Announce";
import Banner from "@/components/manage/banner/Banner";
import Comment from "@manage/comment/Comment";
import Complain from "@manage/complain/Complain";

const UnauthenticatedRoutes = () => {
  const {
    LOGIN,
    HOME,
    USERS,
    GRADE,
    WRITER_APPROVE,
    WRITER_MANAGE,
    NOVEL_MANAGE,
    ANNOUNCE_MANAGE,
    BANNER_MANAGE,
    COMMENT_MANAGE,
    COMPLAIN_MANAGE,
  } = Path;

  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={USERS} element={<Manage />} />
      <Route path={GRADE} element={<Grade />} />
      {/* 작가 신청,관리 */}
      <Route path={WRITER_APPROVE} element={<WriterApply />} />
      <Route path={WRITER_MANAGE} element={<WriterManage />} />
      <Route path={NOVEL_MANAGE} element={<NobelManagement />} />
      <Route path={ANNOUNCE_MANAGE} element={<Announce />} />
      <Route path={BANNER_MANAGE} element={<Banner />} />
      <Route path={COMMENT_MANAGE} element={<Comment />} />
      <Route path={COMPLAIN_MANAGE} element={<Complain />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
