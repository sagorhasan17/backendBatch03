import { Schema, model, Document } from 'mongoose';
import type { IStudent } from './student.interface.js';

const courseSchema = new Schema<IStudent>({
  studentId: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contectNo: { type: String, required: true },
  emergencyContectNo: { type: String, required: true },
  address: { type: String, required: true },
  guardian: { type: String, required: true },
  profileImg: { type: String, required: true },
  courseName: { type: String, required: true },
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now },
});

export const StudentModel = model<IStudent>('Student', courseSchema);
