import { Router } from "express";

const router = Router();

router.all("/", (req, res) => {
    res.status(200).json({status: "healthy"});
});

export default router;