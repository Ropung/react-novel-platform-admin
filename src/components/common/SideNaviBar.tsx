import Path from "@/utils/path/routes";
import { FaBook, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { GiVibratingBall } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { AiTwotoneNotification } from "react-icons/ai";
import { MdManageAccounts, MdOutlineManageAccounts } from "react-icons/md";

const SideNaviBar = () => {
  const {
    HOME,
    USERS,
    GRADE,
    AUTH_WRITER_REQ,
    AUTH_WRITER_MANAGEMENT,
    AUTH_NOVEL_MANAGEMENT,
    ANNOUNCE,
  } = Path;

  const liAdminStyle = "cursor-pointer hover:bg-primary-active px-6 py-4";

  return (
    <ul className="w-72 h-full flex flex-col text-main-contra font-bold text-sm">
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
          to={AUTH_WRITER_REQ}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <MdOutlineManageAccounts className="text-xl" />
          <p>작가신청</p>
        </Link>
      </li>
      <li className={liAdminStyle}>
        <Link
          to={AUTH_WRITER_MANAGEMENT}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <MdManageAccounts className="text-xl" />
          <p>작가관리</p>
        </Link>
      </li>
      <li className={liAdminStyle}>
        <Link
          to={AUTH_NOVEL_MANAGEMENT}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <TfiWrite className="text-xl" />
          <p>웹소설 관리</p>
        </Link>
      </li>
      <li className={liAdminStyle}>
        <Link
          to={ANNOUNCE}
          className="w-full h-fit flex flex-row gap-2 items-center"
        >
          <AiTwotoneNotification className="text-xl" />
          <p>공지사항 관리</p>
        </Link>
      </li>
      <li className={liAdminStyle}>댓글관리</li>
      <li className={liAdminStyle}>공지사항 관리</li>
      <li className={liAdminStyle}>이벤트사항 관리</li>
      <li className={liAdminStyle}>배너 관리</li>
      <li className={liAdminStyle}>민원 관리</li>
    </ul>
  );
};

export default SideNaviBar;
