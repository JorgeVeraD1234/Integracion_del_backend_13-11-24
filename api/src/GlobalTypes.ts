import { Schema } from "mongoose"

export interface IQuestionnaires {
    questionnaireId: Schema.Types.ObjectId | string,
    title: string,
    description: string,
    userId: Schema.Types.ObjectId | string;
};

export interface IAnswer {
    answer: string,
    questionnaireId: Schema.Types.ObjectId | string,
    questionId: Schema.Types.ObjectId | string
};

export interface IOption {
    optionId: Schema.Types.ObjectId | string,
    title: string,
    questionId: Schema.Types.ObjectId | string
};


export interface IQuestion {
    questionId: Schema.Types.ObjectId | string,
    title: String,
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    questionnaireId: Schema.Types.ObjectId | string
};

export interface IUser {
    userId: Schema.Types.ObjectId | string,
    name: string,
    lastNames: string,
    email: string,
    password: string,
    rol: "administrator" | "client"
};

