import axios from "axios";

export const fetchGithubProfile = async (username) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}`
        );

        return response.data;
    } catch (error) {
        if (error.response?.status === 404) {
            throw new Error("GitHub user not found");
        }

        throw new Error("Failed to fetch GitHub profile");
    }
};