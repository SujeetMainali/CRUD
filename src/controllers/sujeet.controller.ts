import { Request, Response, NextFunction } from "express";
import SujeetService from "../services/sujeet.service";

class SujeetController{
    constructor(private sujeetService = new SujeetService()){
        this.createSujeet = this.createSujeet.bind(this);
    }
    async createSujeet(req:Request, res:Response, next:NextFunction){
        const data = req.body;
        try {
            const sujeet = await this.sujeetService.createSujeet(data);
            res.status(200).json({
                status: "success",
                data: {
                    sujeet
                },
                message: "Sujeet Created successfully"
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default  new SujeetController();