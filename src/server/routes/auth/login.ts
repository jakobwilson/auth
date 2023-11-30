//@ts-nocheck
import * as jwt from "jsonwebtoken";
import * as passport from "passport";
import config from "../../config";
import { Request } from "express";
import { Router } from "express";

const router = Router();

export interface ReqUser extends Request {
  user?: {
    id?: number;
    email?: string;
  };
}

router.post("/", passport.authenticate("local", {session: false}), async (req: ReqUser, res) => {
  try {
    const token = jwt.sign(
      { userid: req.user.id, email: req.user.email, role: 1 },
      config.jwt.secret,
      { expiresIn: "15d" }
    );
    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "codes shit" });
  }
});

export default router;
