import MainButton from "@/styles/ui-components/styled-button";
import AnnounceInfo from "@/data/announce";
import { FiChevronLeft } from "react-icons/fi";

const Announce = () => {
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
          <option value="write">카테고리</option>
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
                카테고리
              </th>
              <th scope="col" className={theadStyle}>
                공지사항
              </th>
              <th scope="col" className={theadStyle}>
                등록일
              </th>
              <th scope="col" className={theadStyle}>
                조회수
              </th>
            </tr>
          </thead>
          {/* 데이터 들어갈곳 */}
          <tbody className="w-full divide-y divide-gray-100 border-t border-gray-100">
            {AnnounceInfo.map((item) => {
              return (
                <tr className="hover:bg-gray-200 cursor-pointer">
                  {/* 글번호 */}
                  <td className="px-6 py-4" key={item.id}>
                    {item.id}
                  </td>
                  {/* 카테고리 */}
                  <th className="flex gap-3 px-6 py-4 font-normal">
                    {item.category}
                  </th>
                  {/* 제목 */}
                  <td className="px-6 py-4 text-gray-600">{item.title}</td>
                  {/*  등록일*/}
                  <td className="px-6 py-4 text-gray-600">{item.input_data}</td>
                  {/* 조회수 */}
                  <td className="px-6 py-4 text-gray-600">{item.count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-center items-center">
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
      </div>
      {/* 공지등록 버튼 */}
      <div className="flex justify-end">
        <MainButton className="px-4 py-2">공지등록하기</MainButton>
      </div>
    </div>
  );
};

export default Announce;
