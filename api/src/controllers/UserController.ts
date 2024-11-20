import { Request, Response } from "express";
import { UserModel } from "../models/UsersModel";

export const registerUsers = async (req: Request, res: Response):Promise<any> => {

    try {



        //Validar que los datos que necesitamos existen
        const name = req.body.name
        const email = req.body.email
        const lastNames = req.body.lastname
        const password = req.body.password
        const rol = req.body.rol

        //Administradores no pueden crear clientes
        if (req.user?.rol === "administrator" && rol === "client") {
            return res.status(400).json({ msg: "Los administradores no pueden crear clientes" })
        }

        if (!name || !email || !lastNames || !password || !rol) {
            return res.status(400).json({
                msg: "Faltan datos para crear un usuario"
            })
        }

        //validar que el usuario sea administrador si el usuario a crear es administrador
        if (rol == "administrator" && req.user?.rol != "administrator") {
            return res.status(400).json({
                msg: "No puedes crear un admin si no eres uno"
            })
        }

        await UserModel.create({
            name,
            lastNames,
            email,
            password,
            rol
        })


        return res.status(200).json({ msg: "Usuario registrado con exito" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Hubo un error al crear un usuario" })

    }

}