CREATE DATABASE IF NOT EXISTS github_analyzer;

USE github_analyzer;

CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,

    username VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(255),

    public_repos INT DEFAULT 0,
    followers INT DEFAULT 0,
    following INT DEFAULT 0,

    account_created DATE,

    profile_url VARCHAR(255),

    popularity_score INT,

    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);