import { Request, Response } from "express";
import { UserModel } from "../models/UsersModel";
import jwt from "jsonwebtoken"

export const registerUsers = async (req: Request, res: Response): Promise<any> => {

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

        const user = await UserModel.create({
            name,
            lastNames,
            email,
            password,
            rol
        })

        const token = jwt.sign(JSON.stringify(user), "pocoyo");

        return res.status(200).json({ msg: "Usuario registrado con exito", token })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Hubo un error al crear un usuario" })

    }

}

export const singIn = async (req: Request, res: Response): Promise<any> => {
    try {

        //correo y contrasena
        const email = req.body.email
        const password = req.body.password

        //verificar que el ususario existe
        const user = await UserModel.findOne({
            email: req.body.email,
            password: req.body.password
        })

        const token = jwt.sign(JSON.stringify(user), "Soso");
        //si no existe devuelve un error
        if (!user) {
            return res.status(400).json({
                msg: "Los datos ingresados son erroneos"
            })
        } else {
            return res.status(200).json({ msg: "Si pudo ingresar", token })
        }
        //si existe devuelve un token

    } catch (error) {

        console.log(error)
        return res.status(500).json({ msg: "Hubo un error al crear un usuario" })

    }

}