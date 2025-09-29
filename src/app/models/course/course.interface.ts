import type { Types } from "mongoose";

export interface ICourse{
    courseId:string; 
    title: string;
    slug: string;
    category : Types.ObjectId;
    type: string;
    image: string;
    fee: string;
    rating: number;
    totalRating: number;
    totalRatingEnroll: number;
    mentor: Types.ObjectId;
    courseStart: string;
    duration : number;
    lectures: number;
    totalExam : number;
    totalProject :number;
    courseDelails: string;
    courseOverview: string;
    curriculum: string[];
    courseIncludes: string[];
    softwareIncludes: string[];
    jobOption: string[];
}