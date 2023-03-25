export default interface UserInfoProps {
  id: number;
  userName: string;
  email: string;
  states: StatePops;
  job: JobProps;
  grade: gradeProps;
  signIn: string;
  lastIn: string;
  novel: novelProps[];
}

export interface gradeProps {
  gradeName?: GradeNameProps;
  gradeLevel?: number;
  discountRate?: number;
}

export interface novelProps {
  userName: string;
  novelId: number;
  novelTitle: string;
  category: categoryProps[];
}

export type GradeNameProps =
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "DIAMOND";
export type StatePops = "Approved" | "Declined";
export type JobProps = "USER" | "MAKER";
export type categoryProps = "ACTION" | "ROMANCE" | "THRILLER";
