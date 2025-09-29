

import type { Request, Response } from 'express';
import { CourseService } from './course.services.js';

const CreateCourseController = async (req: Request, res: Response) => {
  
  try {
      const course  = await CourseService.CreateCourseService(req.body)
  res.status(201).json({
    success: true,
    status: 'success',
    message: 'Course created successfully',
    data: course
  })
  } catch (error) {
    console.log(error);
  }

}

export const CourseController = {
  CreateCourseController
}