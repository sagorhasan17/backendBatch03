import type { Types } from 'mongoose';

export interface IStudent {
  studentId: string;
  name: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contectNo: string;
  emergencyContectNo: string;
  address: string;
  guardian: string;
  profileImg: string;
  courseName: string;
  // createdAt: data;
  // updatedAt: data;
}
