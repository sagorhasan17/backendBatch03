import express from 'express';
import { StudentController } from './student.controller.js';

const router = express.Router();

router.post('/create-student', StudentController.CreateStudentService);

export const StudentRoute = router;
