import BannerInfo from "@/data/banner";
import ComplainInfo from "@/data/complain";
import MainButton, { DeleteButton } from "@/styles/ui-components/styled-button";
import { PrimaryButton } from "@/styles/ui-components/styled-button";
import { SubButton } from "@/styles/ui-components/styled-button";
import { FiChevronLeft } from "react-icons/fi";

const Complain = () => {
  const theadStyle = "px-6 py-4  whitespace-nowrap font-medium text-gray-900";
  const pageStyle =
    "h-9 w-9 bg-white hover:bg-main flex items-center justify-center rounded-md border border-default text-default-contra hover:text-white";

  return (
    <div className="w-full flex flex-col gap-2">
      {/* 댓글 테이블 */}
      <section className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm overflow-x-auto">
          <thead className="w-full bg-gray-50 text-center">
            <tr>
              <th scope="col" className={theadStyle}>
                번호
              </th>
              <th scope="col" className={theadStyle}>
                서비스 분류
              </th>
              <th scope="col" className={theadStyle}>
                문의내역
              </th>
              <th scope="col" className={theadStyle}>
                문의날짜
              </th>
            </tr>
          </thead>
          {/* 데이터 들어갈곳 */}
          <tbody className="w-full divide-y divide-gray-100 border-t border-gray-100">
            {ComplainInfo.map((item) => {
              return (
                <tr className="hover:bg-gray-200 cursor-pointer text-center">
                  {/* 민원번호 */}
                  <td className="px-6 py-4" key={item.id}>
                    {item.id}
                  </td>
                  {/* 서비스 분류*/}
                  <th className="px-6 py-4 font-normal">{item.category}</th>
                  {/*  문의 제목*/}
                  <td className="px-6 py-4 text-gray-600">{item.title}</td>
                  {/* 문의 날짜 */}
                  <td className="flex items-center justify-start px-6 py-4">
                    <td className="px-6 py-4 text-gray-600">
                      {item.input_data}
                    </td>
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

export default Complain;
