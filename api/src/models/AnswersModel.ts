import { Schema, model } from "mongoose";

interface IAnwer {
    answer: string;
    questionnaireId: Schema.Types.ObjectId | string;
    questionId: Schema.Types.ObjectId | string;
};

const AnswerSchema = new Schema<IAnwer>({
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








































