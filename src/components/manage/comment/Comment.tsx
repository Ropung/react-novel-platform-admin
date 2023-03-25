import CommentInfo from "@/data/comment";
import MainButton, {
  DeleteButton,
  PrimaryButton,
} from "@/styles/ui-components/styled-button";
import { FiChevronLeft } from "react-icons/fi";

const Comment = () => {
  const theadStyle = "px-6 py-4  whitespace-nowrap font-medium text-gray-900";
  const pageStyle =
    "h-9 w-9 bg-white hover:bg-main flex items-center justify-center rounded-md border border-default text-default-contra hover:text-white";

  return (
    <div className="w-full flex flex-col gap-2">
      {/* 검색창 */}
      <section className="w-full flex flex-row gap-4 py-4">
        <select
          name="search_choice"
          id="select"
          className="w-[15%] border boder-gray-200 rounded-md p-2"
        >
          <option value="title">댓글</option>
          <option value="write">작성자</option>
        </select>
        <input
          className="flex flex-1 border boder-gray-200 rounded-md p-2"
          type="text"
          placeholder="검색어를 입력하세요."
        />
        <MainButton className="w-[20%] py-2 font-bold">검색하기</MainButton>
      </section>
      {/* 댓글 테이블 */}
      <section className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm overflow-x-auto">
          <thead className="w-full bg-gray-50 text-center">
            <tr>
              <th scope="col" className={theadStyle}>
                번호
              </th>
              <th scope="col" className={theadStyle}>
                댓글내용
              </th>
              <th scope="col" className={theadStyle}>
                작성자
              </th>
              <th scope="col" className={theadStyle}>
                작성일
              </th>
              <th scope="col" className={theadStyle}>
                구분
              </th>
            </tr>
          </thead>
          {/* 데이터 들어갈곳 */}
          <tbody className="w-full divide-y divide-gray-100 border-t border-gray-100">
            {CommentInfo.map((item) => {
              return (
                <tr className="hover:bg-gray-200 cursor-pointer text-center">
                  {/* 글번호 */}
                  <td className="px-6 py-4" key={item.id}>
                    {item.id}
                  </td>
                  {/* 내용 */}
                  <th className="flex gap-3 px-6 py-4 font-normal">
                    {item.content}
                  </th>
                  {/* 작성자 */}
                  <td className="px-6 py-4 text-gray-600">{item.username}</td>
                  {/*  등록일*/}
                  <td className="px-6 py-4 text-gray-600">{item.input_data}</td>
                  <td className="flex items-center justify-end px-6 py-4">
                    <PrimaryButton className="px-6 py-2">숨기기</PrimaryButton>
                    <DeleteButton className="px-6 py-2">삭제</DeleteButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

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

export default Comment;
