import { validationResult } from "express-validator";

export default function registerValidatorCheck(req, res, next) {
  const results = validationResult(req);

  if (results.isEmpty()) {
    return next();
  } else {
    return res.render("register", { err: results.mapped() });
  }
}
