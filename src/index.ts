import "reflect-metadata";
import dataSource from "./config/database.config"
import app from "../src/config/app";
import env from "./config/env"
// import { saveUser } from "./data/insertUser";

dataSource
.initialize()
.then(async()=>{
    app.listen(env.PORT, async()=>{
    //   await  saveUser();
        console.log(`node server started at ${env.PORT}`)
        console.log(`database connected successfully`);
    });
})
.catch((err)=>{
    console.log(err);
    
})

