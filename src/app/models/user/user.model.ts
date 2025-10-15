 
import { Schema, model } from 'mongoose';
import type { IUser } from './user.interface.js';

const userSchema = new Schema<IUser>({
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isPasswordChanged: { type: Boolean, required: true, default: false },
  role: { type: String, enum: ['admin', 'mentor', 'student'], required: true },
  status: { type: String, enum: ['active', 'blocked', 'pending'], required: true, default: 'pending' },
  isDeleted: { type: Boolean, required: true, default: false },
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now },
});

export const UserModel = model<IUser>('User', userSchema);
