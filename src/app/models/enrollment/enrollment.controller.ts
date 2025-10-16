import type { Request, Response } from "express";
import { EnrollmentService } from "./enrollment.services.js";


const CreateEnrollmentController = async (req: Request, res: Response) => {
  try {
    const enrollment = await EnrollmentService.CreateEnrollmentService(req.body);
    res.status(201).json({
      success: true,
      status: "success",
      message: "Enrollment created successfully",
      data: enrollment,
    });
  } catch (error) {
    console.log(error);
  }
}

export const EnrollmentController = {
  CreateEnrollmentController,
}