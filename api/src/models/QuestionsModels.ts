import { Schema, model } from "mongoose"

interface IQuestion {
    questionId: Schema.Types.ObjectId | string,
    title: String,
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    answer: String
    questionnaireId: Schema.Types.ObjectId | string,
}

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

    answer: {
        type: String,
        required: true
    },

    questionnaireId: {
        type: Schema.Types.ObjectId,
        ref: "questionnaires",
        required: true
    } 

});

export const QuestionModel = model("questions", QuestionSchema)





















