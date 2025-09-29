import { model, Schema } from "mongoose";
import type { ICourse } from "./course.interface.js";



const courseSchema = new Schema<ICourse>({
    courseId: {type: String, required: true},
    title: {type: String, required: true},
    category: {type: Schema.Types.ObjectId, required: true},
    type: {type: String, required: true},
    image: {type: String, required: true},
    fee: {type: String, required: true},
    rating: {type: Number, required: true},
    totalRating: {type: Number, required: true},
    totalRatingEnroll: {type: Number, required: true},
    mentor: {type: Schema.Types.ObjectId, required: true},
    courseStart: {type: String, required: true},
    duration: {type: Number, required: true},
    lectures: {type: Number, required: true},
    totalExam: {type: Number, required: true},
    totalProject: {type: Number, required: true},
    courseDelails: {type: String, required: true},
    courseOverview: {type: String, required: true},
    curriculum: {type: [String], required: true},
    courseIncludes: {type: [String], required: true},
    softwareIncludes: {type: [String], required: true},
    jobOption: {type: [String], required: true},
})

export const CourseModel = model<ICourse>("Course",courseSchema)  //"Course" is database name <ICourse> useing for sussetion