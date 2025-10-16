import type { Types } from "mongoose";


export interface IEnrollment{
  user: Types.ObjectId;
  course: Types.ObjectId;
  status: "Approved" | "Rejected" | "cancelled";
  date: Date;
}