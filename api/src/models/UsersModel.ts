import { Schema, model } from "mongoose";
import { IUser } from "../GlobalTypes";

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

export const UserModel = model("users", UserSchema);