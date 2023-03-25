import AnnounceProps from "@/models/announce";

const AnnounceInfo: AnnounceProps[] = [
  {
    id: 1,
    category: "NOTICE",
    title: "[공지사망] 서비스 접습니다",
    input_data: "2023-03-03",
    count: 100,
  },
  {
    id: 2,
    category: "EVENT",
    title: "[이벤트] 회원가입 이벤트",
    input_data: "2023-02-03",
    count: 1000,
  },
  {
    id: 3,
    category: "SERVICE",
    title: "[서비스] 서비스 일시중단 안내",
    input_data: "2023-01-03",
    count: 223,
  },
  {
    id: 4,
    category: "NOTICE",
    title: "[공지사항] 서비스 개편안내",
    input_data: "2023-05-03",
    count: 132,
  },
];

export default AnnounceInfo;
