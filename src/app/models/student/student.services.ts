import type { IStudent } from "./student.interface.js";
import { StudentModel } from "./student.model.js";


const CreateStudentService = async (payLoad: IStudent) => {
  const student = await StudentModel.create(payLoad)
  return student;
}

export const StudentService = {
  CreateStudentService
}
