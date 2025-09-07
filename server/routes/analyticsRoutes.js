// backend/routes/analyticsRoutes.js
import express from "express";
import { getImpact } from "../controllers/analyticsController.js";
const router = express.Router();

router.get("/", getImpact);

export default router;
