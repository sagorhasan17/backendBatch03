import express, { type Application } from 'express';
import dotenv from 'dotenv';
import { CourseRoutes } from './app/models/course/course.routes.js';
import { StudentRoute } from './app/models/student/student.routes.js';
import { UserRoute } from './app/models/user/user.routes.js';

dotenv.config();
const app:Application = express();

app.use(express.json());

app.use('/api/courses', CourseRoutes);
app.use('/api/students/', StudentRoute)
app.use('/api/user/', UserRoute)

app.get('/', (req, res) => {
  res.send('Server is Properly Running...!');
});

export default app;
