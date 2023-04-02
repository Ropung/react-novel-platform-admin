import Path from "@/utils/path/routes";
import { FaBook, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { GiVibratingBall } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import {
  AiFillPicture,
  AiOutlineComment,
  AiTwotoneNotification,
} from "react-icons/ai";
import { MdManageAccounts, MdOutlineManageAccounts } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

const SideNaviBar = () => {
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

  const liAdminStyle = "cursor-pointer hover:bg-primary-active px-6 py-4";

  return (
    <ul className="w-full h-full flex flex-col text-main-contra font-bold text-sm">
      <li className="bg-primary-active px-6 py-4">
        <Link
          to={HOME}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <FaHome className="text-xl" />
          <p>관리 페이지 목록</p>
        </Link>
      </li>
      <li className={liAdminStyle}>
        <Link
          to={USERS}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <BiUser className="text-xl" />
          <p>회원관리</p>
        </Link>
      </li>
      <li className={liAdminStyle}>
        <Link
          to={GRADE}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <GiVibratingBall className="text-xl" />
          <p>등급관리</p>
        </Link>
      </li>
      <li className={liAdminStyle}>
        <Link
          to={WRITER_APPROVE}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <MdOutlineManageAccounts className="text-xl" />
          <p>작가신청</p>
        </Link>
      </li>
      <li className={liAdminStyle}>
        <Link
          to={WRITER_MANAGE}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <MdManageAccounts className="text-xl" />
          <p>작가관리</p>
        </Link>
      </li>
      <li className={liAdminStyle}>
        <Link
          to={NOVEL_MANAGE}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <TfiWrite className="text-xl" />
          <p>웹소설 관리</p>
        </Link>
      </li>
      <li className={liAdminStyle}>
        <Link
          to={ANNOUNCE_MANAGE}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <AiTwotoneNotification className="text-xl" />
          <p>공지사항 관리</p>
        </Link>
      </li>
      <li className={liAdminStyle}>
        <Link
          to={COMMENT_MANAGE}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <AiOutlineComment className="text-xl" />
          <p>댓글관리</p>
        </Link>
      </li>
      <li className={liAdminStyle}>
        <Link
          to={BANNER_MANAGE}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <AiFillPicture className="text-xl" />
          <p>배너관리</p>
        </Link>
      </li>
      <li className={liAdminStyle}>
        <Link
          to={COMPLAIN_MANAGE}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <HiUserGroup className="text-xl" />
          <p>민원관리</p>
        </Link>
      </li>
    </ul>
  );
};

export default SideNaviBar;
