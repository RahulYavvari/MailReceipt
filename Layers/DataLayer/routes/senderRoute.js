import { Router } from "express";

const router = Router();

router.get("/emailbucket");
router.post("/emailbucket");
router.put("/emailbucket");
router.delete("/emailbucket");

router.get("/emailclient");
router.post("/emailclient");
router.put("/emailclient");
router.delete("/emailclient");

router.get("/emails");
router.post("/emails");
router.put("/emails");
router.delete("/emails");


export default router;