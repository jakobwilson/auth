//@ts-nocheck
import * as jwt from "jsonwebtoken";
import config from "../../config";
import database from "../../database";
import { Router } from "express";
import { generateHash } from '../../utilities/passwords';
 
const router = Router();


router.post("/", async (req, res) => {
  const newUser = req.body;
  try {
    newUser.password = generateHash(newUser.password);
    const result = await database.authors.insert(newUser);
    const token = jwt.sign(
      { userid: result.insertId, email: newUser.email, role: 1 },
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
