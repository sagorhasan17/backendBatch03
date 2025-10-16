
import express from "express";
import { EnrollmentController } from "./enrollment.controller.js";

const router = express.Router();

router.post("/api/enrollments",EnrollmentController.CreateEnrollmentController);

export const EnrollmentRoutes = router;