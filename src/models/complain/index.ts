export default interface ComplainProps {
  id: number;
  category: CategoryProps;
  title: string;
  input_data: string;
}

export type CategoryProps = "USER" | "NOVEL" | "PAY" | "SERVICE" | "ETC";
