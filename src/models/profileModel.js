import pool from "../config/db.js";

export const saveProfile = async (profileData) => {
    const {
        username,
        name,
        public_repos,
        followers,
        following,
        account_created,
        profile_url,
        popularity_score,
    } = profileData;

    const query = `
    INSERT INTO github_profiles (
      username,
      name,
      public_repos,
      followers,
      following,
      account_created,
      profile_url,
      popularity_score
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      name = VALUES(name),
      public_repos = VALUES(public_repos),
      followers = VALUES(followers),
      following = VALUES(following),
      account_created = VALUES(account_created),
      profile_url = VALUES(profile_url),
      popularity_score = VALUES(popularity_score)
  `;

    const [result] = await pool.execute(query, [
        username,
        name,
        public_repos,
        followers,
        following,
        account_created,
        profile_url,
        popularity_score,
    ]);

    return result;
};

export const getAllProfiles = async () => {
    const [rows] = await pool.execute(
        `SELECT * FROM github_profiles ORDER BY analyzed_at DESC`
    );

    return rows;
};

export const getProfileByUsername = async (username) => {
    const [rows] = await pool.execute(
        `SELECT * FROM github_profiles WHERE username = ?`,
        [username]
    );

    return rows[0];
};

export const getTopProfiles = async () => {
    const [rows] = await pool.execute(`
    SELECT *
    FROM github_profiles
    ORDER BY popularity_score DESC
    LIMIT 10
  `);

    return rows;
};