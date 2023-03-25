import MainButton, {
  DefaultButton,
} from "@/styles/ui-components/styled-button";
import { FaAngleDown } from "react-icons/fa";
import UserInfo from "@/data/user";
import { FiChevronLeft } from "react-icons/fi";

const Manage = () => {
  const theadStyle = "px-6 py-4  whitespace-nowrap font-medium text-gray-900";
  const pageStyle =
    "h-9 w-9 bg-white hover:bg-main flex items-center justify-center rounded-md border border-default text-default-contra hover:text-white";

  return (
    <div className="w-full flex flex-col gap-2">
      {/* 검색창 */}
      <div className="w-full flex flex-row gap-4 py-4">
        <select
          name="search_choice"
          id="select"
          className="w-[15%] border boder-gray-200 rounded-md p-2"
        >
          <option value="title">제목</option>
          <option value="write">작가</option>
          <option value="category">장르</option>
        </select>
        <input
          className="flex flex-1 border boder-gray-200 rounded-md p-2"
          type="text"
          placeholder="검색어를 입력하세요."
        />
        <MainButton className="w-[20%] py-2 font-bold">검색하기</MainButton>
      </div>
      <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm overflow-x-auto">
          <thead className="w-full bg-gray-50">
            <tr>
              <th scope="col" className={theadStyle}>
                번호
              </th>
              <th scope="col" className={theadStyle}>
                회원목록
              </th>
              <th scope="col" className={theadStyle}>
                가입일
              </th>
              <th scope="col" className={theadStyle}>
                마지막 로그인
              </th>
              <th scope="col" className={theadStyle}>
                상태
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-right">
                <div className="flex flex-row gap-1 items-center justify-end">
                  <span>구분</span>
                  <FaAngleDown />
                </div>
              </th>
            </tr>
          </thead>
          {/* 데이터 들어갈곳 */}
          <tbody className="w-full divide-y divide-gray-100 border-t border-gray-100">
            {UserInfo.map((user, index) => {
              return (
                <tr className="hover:bg-gray-50">
                  {/* 번호 */}
                  <td className="px-6 py-4" key={user.id}>
                    {user.id}
                  </td>

                  {/* 회원정보 */}
                  <th className="flex gap-3 px-6 py-4 font-normal">
                    <div className="relative h-10 w-10">
                      <img
                        className="h-full w-full rounded-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span
                        className={`absolute right-0 bottom-0 h-2 w-2 rounded-full ring ring-white ${
                          user.states == "Approved" ? "bg-success" : "bg-danger"
                        }`}
                      ></span>
                    </div>
                    <div className="text-sm">
                      {/* 회원아이디 */}
                      <div className="font-medium text-gray-700">
                        {user.userName}
                      </div>
                      {/* 이메일 */}
                      <div className="text-gray-400">{user.email}</div>
                    </div>
                  </th>
                  {/* 가입일 */}
                  <td className="px-6 py-4 text-gray-600">{user.signIn}</td>
                  {/* 마지막 로그인 */}
                  <td className="px-6 py-4 text-gray-600">{user.lastIn}</td>
                  {/* 상태 */}
                  <td className="px-6 py-4 text-white">
                    <span
                      className={`border p-2 rounded-md ${
                        user.states == "Approved" ? "bg-success" : "bg-danger "
                      }`}
                    >
                      {user.states}
                    </span>
                  </td>
                  <td className="text-end px-6 py-4">
                    <DefaultButton>비활성화</DefaultButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <section className="w-full flex justify-center items-center">
        <ul className="flex items-center justify-center gap-2 py-2 ">
          {/* 왼쪽 */}
          <li>
            <a href="" className={pageStyle}>
              <FiChevronLeft className="text-xl" />
            </a>
          </li>
          <li>
            <a href="" className={pageStyle}>
              1
            </a>
          </li>
          {/* 오른쪽 */}
          <li>
            <a href="" className={pageStyle}>
              <FiChevronLeft className="text-xl rotate-180" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Manage;
