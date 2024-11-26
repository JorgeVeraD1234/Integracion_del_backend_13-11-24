 interface IUser {
    _id: string,
    name: string,
    lastNames: string,
    email: string,
    password: string,
    rol: "administrator" | "client"
};

declare namespace Express {
    export interface Request {
        user?: IUser
    }
}