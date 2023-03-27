import express, { json } from "express";
const middlewares = (app) => {
    app.use(express, json());
    app.use('/api', routes);
};
