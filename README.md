# GitHub Profile Analyzer API

A RESTful API built with Node.js, Express.js, and MySQL that analyzes GitHub user profiles using the GitHub Public API and stores useful profile insights in a MySQL database.

---
 Live Url -  https://github-profile-analyzer-2usu.onrender.com/

---

## Features

- Fetch GitHub user profile data using GitHub Public API
- Store analyzed profile data in MySQL
- Update existing profiles automatically
- Retrieve all analyzed profiles
- Retrieve a specific analyzed profile
- Retrieve top profiles based on popularity score
- Input validation using Express Validator
- Centralized error handling
- Environment variable configuration using dotenv

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- Axios
- Express Validator
- Dotenv
- GitHub REST API

---

## Project Structure

```text
github-profile-analyzer
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   └── profileController.js
│   │
│   ├── middleware
│   │   ├── errorHandler.js
│   │   └── validation.js
│   │
│   ├── models
│   │   └── profileModel.js
│   │
│   ├── routes
│   │   └── profileRoutes.js
│   │
│   ├── services
│   │   └── githubService.js
│   │
│   ├── utils
│   │   ├── AppError.js
│   │   └── catchAsync.js
│   │
│   ├── app.js
│   └── server.js
│
├── database
│   └── schema.sql
│
├── .env.example
├── package.json
├── README.md
└── .gitignore
```

---

## API Endpoints

### Analyze GitHub Profile

Analyze a GitHub profile and store the result in the database.

```http
GET /api/analyze/:username
```

Example:

```http
GET /api/analyze/octocat
```

---

### Get All Profiles

Retrieve all analyzed profiles.

```http
GET /api/profiles
```

---

### Get Single Profile

Retrieve a specific analyzed profile.

```http
GET /api/profiles/:username
```

Example:

```http
GET /api/profiles/octocat
```

---

### Get Top Profiles

Retrieve the top profiles based on popularity score.

```http
GET /api/profile/top
```

---

## Popularity Score Formula

The popularity score is calculated using:

```text
Popularity Score = (Followers × 2) + Public Repositories
```

This score is used to rank analyzed profiles.

---

## Database Schema

Table: `github_profiles`

| Column | Type |
|----------|----------|
| id | INT |
| username | VARCHAR(100) |
| name | VARCHAR(255) |
| public_repos | INT |
| followers | INT |
| following | INT |
| account_created | DATE |
| profile_url | VARCHAR(255) |
| popularity_score | INT |
| analyzed_at | TIMESTAMP |

---

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer

```

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Surajitmanldal/github-profile-analyzer
```

### 2. Navigate to Project Directory

```bash
cd github-profile-analyzer
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file and add the required variables.

### 5. Create Database

Import the schema from:

```text
database/schema.sql
```

### 6. Start Development Server

```bash
npm run dev
```

Server runs on:

```text
http://localhost:5000
```

---

## Error Handling

The application includes:

- Global Error Handling Middleware
- Async Error Wrapper (`catchAsync`)
- Custom Error Class (`AppError`)
- Request Validation Middleware

---

## Author

**Surajit Mandal**

Junior Full Stack / Backend Developer
