import { Schema, model } from "mongoose";
import { IAnswer } from "../GlobalTypes";



const AnswerSchema = new Schema<IAnswer>({
    answer: {
        type: String,
        required: true
    },

    questionnaireId: {
        type: Schema.Types.ObjectId,
        ref: "questionnaires",
        required: true
    },

    questionId: {
        type: Schema.Types.ObjectId,
        ref: "questions",
        required: true
    }

});

export const AnswerModel = model("answers", AnswerSchema);