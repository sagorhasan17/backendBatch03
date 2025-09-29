import express from 'express';
import { CourseController } from './course.controller.js';

const router = express.Router();

router.post('/create-course', CourseController.CreateCourseController);

export const CourseRoutes = router;
