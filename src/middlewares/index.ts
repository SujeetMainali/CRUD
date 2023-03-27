import express, { Application, json, urlencoded } from "express"
import routes from "../routes/index"

const middlewares = (app: Application)=>{
    app.use(express.json())
    app.use(urlencoded({extended:true}))

    app.use("/api",routes)
}

export default middlewares;