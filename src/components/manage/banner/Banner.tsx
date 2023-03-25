import BannerInfo from "@/data/banner";
import CommentInfo from "@/data/comment";
import MainButton, {
  DeleteButton,
  PrimaryButton,
} from "@/styles/ui-components/styled-button";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const Banner = () => {
  const theadStyle = "px-6 py-4  whitespace-nowrap font-medium text-gray-900";
  const pageStyle =
    "h-9 w-9 bg-white hover:bg-main flex items-center justify-center rounded-md border border-default text-default-contra hover:text-white";

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-end py-4  ">
        <MainButton className="px-4">배너등록</MainButton>
      </div>
      {/* 댓글 테이블 */}
      <section className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm overflow-x-auto">
          <thead className="w-full bg-gray-50 text-center">
            <tr>
              <th scope="col" className={theadStyle}>
                배너번호
              </th>
              <th scope="col" className={theadStyle}>
                배너이미지
              </th>
              <th scope="col" className={theadStyle}>
                배너이름
              </th>
              <th scope="col" className={theadStyle}>
                등록일
              </th>
              <th scope="col" className={theadStyle}>
                구분
              </th>
            </tr>
          </thead>
          {/* 데이터 들어갈곳 */}
          <tbody className="w-full divide-y divide-gray-100 border-t border-gray-100">
            {BannerInfo.map((item) => {
              return (
                <tr className="hover:bg-gray-200 cursor-pointer text-center">
                  {/* 배너번호 */}
                  <td className="px-6 py-4" key={item.id}>
                    {item.id}
                  </td>
                  {/* 이미지*/}
                  <td className="px-6 py-4 text-gray-600">
                    <img className="w-12 h-8" src={item.url} alt="url이미지" />
                  </td>
                  {/* 제목 */}
                  <td className="px-6 py-4 text-gray-600">
                    <span>{item.title}</span>
                  </td>
                  {/*  등록일*/}
                  <td className="px-6 py-4 text-gray-600">{item.input_data}</td>
                  <td className="flex items-center justify-center px-6 py-4">
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
export default Banner;
