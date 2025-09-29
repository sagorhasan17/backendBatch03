import express, { type Application } from 'express';
import dotenv from 'dotenv';
import { CourseRoutes } from './app/models/course/course.routes.js';

dotenv.config();
const app:Application = express();

app.use(express.json());

app.use('/api/courses', CourseRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
