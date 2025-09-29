import express, { type Application } from 'express';
import dotenv from 'dotenv';
import { CourseRoutes } from './app/models/course/course.routes.js';
import { StudentRoute } from './app/models/student/student.routes.js';

dotenv.config();
const app:Application = express();

app.use(express.json());

app.use('/api/courses', CourseRoutes);
app.use('/api/students/', StudentRoute)

app.get('/', (req, res) => {
  res.send('Server is Properly Runnin...!');
});

export default app;
