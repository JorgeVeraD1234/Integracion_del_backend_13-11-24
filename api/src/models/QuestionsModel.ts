import { Schema, model } from "mongoose";
import { IQuestion } from "../GlobalTypes";



const QuestionSchema = new Schema<IQuestion>({
    
    questionId: {
        type: Schema.Types.ObjectId,
        ref: "questions",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    type: {
        type: String,
        enum: ["radio", "checkbox", "select", "text"]
    },

    isMandatory: {
        type: Boolean,
        required: true
    },

    questionnaireId: {
        type: Schema.Types.ObjectId,
        ref: "questionnaires",
        required: true
    } 

});

export const QuestionModel = model("questions", QuestionSchema);