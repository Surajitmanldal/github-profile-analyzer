import { param, validationResult } from "express-validator";

export const validateUsername = [
    param("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required")
        .isLength({ min: 1, max: 39 })
        .withMessage("GitHub username must be between 1 and 39 characters"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }

        next();
    },
];