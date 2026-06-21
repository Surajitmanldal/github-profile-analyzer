import { fetchGithubProfile } from "../services/githubService.js";
import { getTopProfiles } from "../models/profileModel.js";
import {
    saveProfile,
    getAllProfiles,
    getProfileByUsername,
} from "../models/profileModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

export const analyzeProfile = catchAsync(async (req, res) => {
    const { username } = req.params;

    const githubData = await fetchGithubProfile(username);

    const profileData = {
        username: githubData.login,
        name: githubData.name,
        public_repos: githubData.public_repos,
        followers: githubData.followers,
        following: githubData.following,
        account_created: githubData.created_at.split("T")[0],
        profile_url: githubData.html_url,
        popularity_score:
            githubData.followers * 2 + githubData.public_repos,
    };

    await saveProfile(profileData);

    res.status(200).json({
        success: true,
        message: "Profile analyzed successfully",
        data: profileData,
    });
});

export const fetchAllProfiles = catchAsync(async (req, res) => {
    const profiles = await getAllProfiles();

    res.status(200).json({
        success: true,
        count: profiles.length,
        data: profiles,
    });
});

export const fetchSingleProfile = catchAsync(async (req, res) => {
    const { username } = req.params;

    const profile = await getProfileByUsername(username);

    if (!profile) {
        throw new AppError("Profile not found", 404);
    }

    res.status(200).json({
        success: true,
        data: profile,
    });
});

export const fetchTopProfiles = catchAsync(async (req, res) => {
    const profiles = await getTopProfiles();

    res.status(200).json({
        success: true,
        count: profiles.length,
        data: profiles,
    });
});