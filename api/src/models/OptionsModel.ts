import { Schema, model } from 'mongoose'

interface IOption {
    optionId: Schema.Types.ObjectId | string;
    title: string;
    questionId: Schema.Types.ObjectId | string;
}

const OptionSchema = new Schema<IOption>({
    
    optionId: {
        type: Schema.Types.ObjectId,
        ref: "options",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    questionId: {
        type: Schema.Types.ObjectId,
        ref: "questions",
        required: true
    }

})

export const OptionModel = model("options", OptionSchema)


