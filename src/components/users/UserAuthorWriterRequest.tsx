import UserInfoProps from "@/models/user";
import {
  DeleteButton,
  ModifyButton,
} from "@/styles/ui-components/styled-button";
import { FaAngleDown } from "react-icons/fa";

const UserAuthorWriterRequest = () => {
  const UserInfo: UserInfoProps[] = [
    {
      id: 1,
      userName: "노기훈",
      email: "563710@naver.com",
      states: "Approved",
      job: "MAKER",
      grade: {
        gradeName: "GOLD",
        gradeLevel: 22,
        discountRate: 5,
      },
      signIn: "2020.02.09",
      lastIn: "2021.02.09",
      novel: [
        {
          userName: "노기훈",
          category: ["Action", "Romance", "Thriller"],
          novelTitle: "",
          novelId: 1,
        },
      ],
    },
    {
      id: 2,
      userName: "노기훈",
      email: "563712@naver.com",
      states: "Declined",
      job: "MAKER",
      grade: {
        gradeName: "GOLD",
        gradeLevel: 22,
        discountRate: 5,
      },
      signIn: "2020.02.09",
      lastIn: "2021.02.09",
      novel: [],
    },
    {
      id: 3,
      userName: "노기훈",
      email: "563710@naver.com",
      states: "Approved",
      job: "USER",
      grade: {
        gradeName: "GOLD",
        gradeLevel: 22,
        discountRate: 5,
      },
      signIn: "2020.02.09",
      lastIn: "2021.02.09",
      novel: [],
    },
  ];

  const theadStyle = "px-6 py-4  whitespace-nowrap font-medium text-gray-900";
  const spanStyle =
    "inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold";

  return (
    <div className="w-full flex flex-col gap-2">
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
                권한
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
          {/* tdody */}

          {UserInfo.map((user, index) => {
            return (
              <tbody className="w-full divide-y divide-gray-100 border-t border-gray-100">
                {user.job == "USER" && (
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
                            user.states == "Approved"
                              ? "bg-success"
                              : "bg-danger"
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
                    <td className="px-6 py-4">
                      <span className={spanStyle}>{user.signIn}</span>
                    </td>
                    {/* 권한 */}
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <p className={spanStyle}>{user.job}</p>
                      </div>
                    </td>
                    {/* 상태 */}
                    <td className="px-6 py-4 text-white">
                      <div className="flex gap-2">
                        <span
                          className={`${spanStyle} ${
                            user.states == "Approved"
                              ? "bg-success"
                              : "bg-danger "
                          }`}
                        >
                          {user.states}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-4">
                        <div className="flex flex-row gap-1 whitespace-nowrap">
                          <ModifyButton className="px-6 py-2 text-xs">
                            등록
                          </ModifyButton>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            );
          })}
        </table>
      </div>
      {/* Pagination */}
      <div className="text-center">
        <div className="inline-flex rounded-xl border border-[#e4e4e4] bg-white p-4">
          <ul className="-mx-[6px] flex items-center">
            <li className="px-[6px]">
              <a
                href="javascript:void(0)"
                className="hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
              >
                <span>
                  <svg
                    width="8"
                    height="15"
                    viewBox="0 0 8 15"
                    className="fill-current stroke-current"
                  >
                    <path
                      d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                      stroke-width="0.3"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
            <li className="px-[6px]">
              <a
                href="javascript:void(0)"
                className="hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
              >
                1
              </a>
            </li>
            <li className="px-[6px]">
              <a
                href="javascript:void(0)"
                className="hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
              >
                2
              </a>
            </li>
            <li className="px-[6px]">
              <a
                href="javascript:void(0)"
                className="hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
              >
                3
              </a>
            </li>
            <li className="px-[6px]">
              <a
                href="javascript:void(0)"
                className="hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
              >
                4
              </a>
            </li>
            <li className="px-[6px]">
              <a
                href="javascript:void(0)"
                className="hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
              >
                <span>
                  <svg
                    width="8"
                    height="15"
                    viewBox="0 0 8 15"
                    className="fill-current stroke-current"
                  >
                    <path
                      d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                      stroke-width="0.3"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserAuthorWriterRequest;
