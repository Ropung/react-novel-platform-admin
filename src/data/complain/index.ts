import CommentProps from "@/models/comment";
import ComplainProps from "@/models/complain";

const ComplainInfo: ComplainProps[] = [
  {
    id: 1,
    title: "고객문의 서비스 왜 이따구에요?",
    category: "SERVICE",
    input_data: "2023-03-03",
  },

  {
    id: 2,
    title: "기타 문의입니다.",
    category: "ETC",
    input_data: "2023-03-03",
  },

  {
    id: 3,
    title: "결제했는데 결제가 안됩니다.",
    category: "PAY",
    input_data: "2023-03-03",
  },
];

export default ComplainInfo;
