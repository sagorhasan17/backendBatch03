import type { ICourse } from "./course.interface.js";
import { CourseModel } from "./course.model.js";


const CreateCourseService = async (payLoad: ICourse) => {
  
  const course = await CourseModel.create(payLoad)
  return course;
}

export const CourseService = {
  CreateCourseService
}