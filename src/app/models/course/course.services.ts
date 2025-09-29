import type { ICourse } from "./course.interface.js";
import { CourseModel } from "./course.model.js";


const CreateCourseService = async (payLoad: ICourse) => {
  
  const course = await CourseModel.create(payLoad)
  return course;
}

const GetAllCourseService = async () => {
  const getCourses = await CourseModel.find({})
  return getCourses
}

export const CourseService = {
  CreateCourseService,
  GetAllCourseService
}