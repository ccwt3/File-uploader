import { body } from "express-validator";

export default [
  body("username")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Field Required")
    .bail()
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be at least 3-20 characters long")
    .bail()
    .matches(/^[a-z0-9._]{3,20}$/)
    .withMessage("Not valid username format"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Field Required")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Password must be at leat 5 characters long"),
];
