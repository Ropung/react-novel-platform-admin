export default interface AnnounceProps {
  id: number;
  title: string;
  input_data: string;
  count: number;
  category: CategoryType;
}

export type CategoryType = "UPDATE" | "SERVICE" | "NOTICE" | "EVENT";
