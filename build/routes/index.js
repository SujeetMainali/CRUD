import messages from "../constants/messages";
import { Router } from "express";
const router = Router();
// route to ensure that server is currently running
router.get("/", (req, resp) => {
    resp.send({
        success: true,
        message: messages["welcomeMessage"],
        data: []
    });
});
export default router;
