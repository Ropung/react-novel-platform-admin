import Path from "@/utils/path/routes";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
export interface dashboardInterface {
  name: string;
  path: string;
  // icon:
}

const SideNaviBar = () => {
  const { HOME, USERS } = Path;

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
      <li className={liAdminStyle}>회원관리</li>
      <li className={liAdminStyle}>등급관리</li>
      <li className={liAdminStyle}>신청관리</li>
      <li className={liAdminStyle}>작과관리</li>
      <li className={liAdminStyle}>웹소설관리</li>
      <li className={liAdminStyle}>댓글관리</li>
      <li className={liAdminStyle}>공지사항 관리</li>
      <li className={liAdminStyle}>이벤트사항 관리</li>
      <li className={liAdminStyle}>배너 관리</li>
      <li className={liAdminStyle}>민원 관리</li>
    </ul>
  );
};

export default SideNaviBar;
