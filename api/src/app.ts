import express, { Application, Request, Response } from "express"
import cors from "cors"
import { registerUsers, singIn } from "./controllers/UserController"
import { createQuizz, getMetrics, getQuestionnaires } from "./controllers/QuestionnairesController"

const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (_req: Request, res: Response) => {
    res.send("Hola desde mi servidor con TS");
})

//usuarios
app.post("/users/create", registerUsers)
app.post("/users/singIn", singIn)


app.post("/users/create", createQuizz)
app.get("/users/get-metrics", getMetrics)
app.get("/questionnaires/get-all", getQuestionnaires)

export default app;