import { Schema, model } from "mongoose";
import { IQuestionnaires } from "../GlobalTypes"


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