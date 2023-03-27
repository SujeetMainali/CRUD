import "reflect-metadata";
import dataSource from "./config/database.config";
import app from "../src/config/app";
import env from "./config/env";
dataSource
    .initialize()
    .then(async () => {
    app.listen(env.PORT, async () => {
        console.log(`node server started at ${env.PORT}`);
        console.log(`database connected successfully`);
    });
})
    .catch((err) => {
    console.log(err);
});
