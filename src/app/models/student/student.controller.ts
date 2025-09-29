import { StudentService } from './student.services.js';
import type { Request, Response } from 'express';

const CreateStudentService = async (req: Request, res: Response) => {
  try {
    const student = await StudentService.CreateStudentService(req.body);
    res.status(201).json({
      success: true,
      status: 'success',
      message: 'Student created successfully',
      data: student,
    });
  } catch (error) {
    console.log(error);
  }
};


export const StudentController = {
  CreateStudentService
}