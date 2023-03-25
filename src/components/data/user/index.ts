import UserInfoProps, { novelProps } from "@/models/user";

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
        novelTitle: "이세계 여행기",
        novelId: 1,
      },
      {
        userName: "노기훈",
        category: ["Action", "Romance", "Thriller"],
        novelTitle: "이세계 여행기2",
        novelId: 2,
      },
      {
        userName: "노기훈",
        category: ["Action", "Romance", "Thriller"],
        novelTitle: "이세계 여행기3",
        novelId: 3,
      },
    ],
  },
  {
    id: 2,
    userName: "이현종",
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
    novel: [
      {
        userName: "이현종",
        category: ["Romance", "Thriller"],
        novelTitle: "이현종 여행기",
        novelId: 4,
      },
      {
        userName: "이현종",
        category: ["Romance", "Thriller"],
        novelTitle: "이현종 여행기2",
        novelId: 5,
      },
      {
        userName: "이현종",
        category: ["Romance", "Thriller"],
        novelTitle: "이현종 여행기3",
        novelId: 6,
      },
    ],
  },

  {
    id: 3,
    userName: "박우주",
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
  {
    id: 4,
    userName: "이승재",
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
    novel: [
      {
        userName: "이승재",
        category: ["Romance", "Thriller"],
        novelTitle: "이승재 여행기",
        novelId: 7,
      },
      {
        userName: "이승재",
        category: ["Romance", "Thriller"],
        novelTitle: "이승재 여행기2",
        novelId: 8,
      },
      {
        userName: "이승재",
        category: ["Romance", "Thriller"],
        novelTitle: "이승재 여행기3",
        novelId: 9,
      },
    ],
  },
];

export default UserInfo;
