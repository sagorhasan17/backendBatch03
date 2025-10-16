
import { model, Schema } from 'mongoose';
import type { IEnrollment } from './enrollment.interface.js';

const enrollmentSchema = new Schema<IEnrollment>({
  user: { type: Schema.Types.ObjectId, required: true },
  course: { type: Schema.Types.ObjectId, required: true },
  status: {
    type: String,
    enum: ['Approved', 'Rejected', 'cancelled'],
    required: true,
  },
  date: { type: Date, required: true, default: Date.now },
});

export const EnrollmentModel = model<IEnrollment>('Enrollment',enrollmentSchema);