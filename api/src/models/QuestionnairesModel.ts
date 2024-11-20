import { Schema, model } from "mongoose";

interface IQuestionnaires {
    questionnaireId: Schema.Types.ObjectId | string,
    title: string,
    description: string,
    userId: Schema.Types.ObjectId | string;
};

const questionnaireSchema = new Schema<IQuestionnaires>({

    questionnaireId: {
        type: Schema.Types.ObjectId,
        ref: "questionnaires",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    }

});

export const QuestionnaireModel = model("questionnaires", questionnaireSchema);