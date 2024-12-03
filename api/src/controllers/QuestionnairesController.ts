import { Request, Response } from "express";
import { QuestionnaireModel } from "../models/QuestionnairesModel";

export const addQuestionnaires = async (req: Request, res: Response): Promise<any> => {

    try {

        //Primero validar que los datos que necesitamos existen!
        const title = req.body.title
        const description = req.body.description
        const userId = req.body.userId
        const IQuestion = req.body.IQuestion
        const IOption = req.body.IOption
        const IAnswer = req.body.IAnswer

        //Validar que exista el usuario
        if (!userId == true) {
            return res.status(400).json({ msg: "No ta, ma..." })

        }
        //Validar que esten todos los datos
        if (!title || !description || !IQuestion || !IOption || !IAnswer) {
            return res.status(400).json({
                msg: "Faltan datos para crear el cuestionario"
            })
        }

        const cuestionario = await QuestionnaireModel.create({
            title,
            description,
            IQuestion,
            IOption,
            IAnswer
        })

        console.log("prueba: ", { cuestionario })

        return res.status(200).json({ msg: "Cuestionario creado con exito!", })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Hubo un error al crear el cuestionario" })

    }
}


export const accessToQuestionnaires = async (req: Request, res: Response): Promise<any> => {
    try {
        const cuestionario = await QuestionnaireModel.findOne({ title: req.body.title })
        if (!cuestionario) {
            return res.status(400).json({
                msg: "No se han encontrado coincidencias"
            });
        }

        return res.status(200).json({ msg: "Se ingreso de forma correcta al cuestionario", cuestionario });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Hubo un error al ingresar al cuestionario"
        })

    }
}