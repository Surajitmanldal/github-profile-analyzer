import express from "express";
import {
    analyzeProfile,
    fetchAllProfiles,
    fetchSingleProfile,
    fetchTopProfiles,
} from "../controllers/profileController.js";
import { validateUsername } from "../middleware/validation.js";

const router = express.Router();

router.get("/analyze/:username", validateUsername, analyzeProfile);

router.get("/profiles", fetchAllProfiles);

router.get("/profile/top", fetchTopProfiles)

router.get("/profiles/:username", validateUsername, fetchSingleProfile);

export default router;