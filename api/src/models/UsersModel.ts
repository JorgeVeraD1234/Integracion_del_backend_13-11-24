import { Schema, model } from 'mongoose'

interface IUser {
    userId: Schema.Types.ObjectId | string,
    name: string,
    lastNames: string,
    email: string,
    password: string,
    rol: "administrator" | "client"
}

const UserSchema = new Schema<IUser>({
    
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },

    name: {
        type: String,
        required: true
    },

    lastNames: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    rol: {
        type: String,
        enum: ["administrator", "client"],
        default: "client"
    }

});

export const UserModel = model("users", UserSchema)













