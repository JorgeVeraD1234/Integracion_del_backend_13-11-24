import { Schema, model } from "mongoose";

interface IAnswer {
    answer: string;
    questionnaireId: Schema.Types.ObjectId | string;
    questionId: Schema.Types.ObjectId | string;
};

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

export const AnswerModel = model("respuestas", AnswerSchema)








































