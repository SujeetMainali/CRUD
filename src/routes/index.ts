import messages from "../constants/messages";

import { Router } from "express";
import SujeetController from "../controllers/sujeet.controller";
import AuthController from "../controllers/auth.controller";
import authController from "../controllers/auth.controller";
import { catchAsync } from "../utils/catchAsync";

const router = Router()


// route to ensure that server is currently running
router.get("/", catchAsync((AuthController.getAll)))

router.get("/sujeet", (req, resp)=>{
    resp.send({
        success: true,
        message: messages["adminCreated"],
        data: [],
    });
});
router.get("/createUser", (req, resp)=>{
    resp.send({
        success: true,
        message: messages["adminCreated"],
        data: [],
    });
});


router.post("/sujeet",SujeetController.createSujeet);
router.post("/createUser",AuthController.signup);
router.post("/signin",AuthController.signin);
router.post("/remove-user",AuthController.removeUser);
router.post("/update-password",AuthController.changePassword)
export default router;
