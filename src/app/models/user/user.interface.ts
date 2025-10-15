import type { Types } from 'mongoose';

export interface IUser {
  userId: string;
  password: string;
  isPasswordChanged: boolean;
  role: 'admin' | 'mentor' | 'student';
  status: 'active' | 'blocked' | 'pending';
  isDeleted: boolean;
  // createdAt: Date;
  // updatedAt: Date;
}
