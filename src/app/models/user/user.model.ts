import { model, Schema } from 'mongoose';
import type { IUser } from './user.interface.js';

const userSchema = new Schema<IUser>({
  userId: { type: String, required: true },
  isPasswordChanged: { type: Boolean, required: true },
  role: { type: String, enum: ['admin', 'mentor', 'student'], required: true },
  status: {
    type: String,
    enum: ['active', 'blocked', 'pending'],
    required: true,
  },
  isDeleted: { type: Boolean, required: true },
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now },
});

export const UserModel = model<IUser>('User', userSchema);
