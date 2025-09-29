import express from 'express';
import { CourseController } from './course.controller.js';

const router = express.Router();

router.post('/create-course', CourseController.CreateCourseController);
router.get('/get-courses', CourseController.GetALlCOntroller)

export const CourseRoutes = router;
