import { validationResult } from "express-validator";

export default function loginValidationCheck(req, res, next) {
  const results = validationResult(req);

  if (results.isEmpty()) {
    return next();
  } else {
    return res.render("login", { err: results.mapped() });
  }
}
