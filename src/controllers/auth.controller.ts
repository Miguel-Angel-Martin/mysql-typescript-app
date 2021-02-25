import { json, Request, Response } from "express";
import { User } from "../models/User";
import { connect } from "../database";
import jwt from "jsonwebtoken";
import { encryptPassword, validatePassword } from "../services/bcrypt.service";

/* export const signup = (req: Request, res: Response) => {
    res.json(req.body);

} */

export async function signup(req: Request, res: Response) {
    const newUser: User = req.body;
    const conn = await connect();
    newUser.password = await encryptPassword(newUser.password);
    const savedUser = await conn.query("INSERT INTO users SET ?", [newUser]);
    //token
    const token: string = jwt.sign(
        { _id: savedUser.insertId },
        process.env.TOKEN_SECRET || "token_test"
    );
    res.header("auth-token", token).json(savedUser);
}

export const signin = async (req: Request, res: Response) => {
    const conn = await connect();
    const user: [Array<User>] = await conn.query(
        'SELECT * FROM users WHERE email = ? LIMIT 1', [req.body.email]);
    console.log(user[0]);
    res.json(user[0]);
    /*  if (!user) return res.status(400).json("Email or Password is wrong");
     if (user) return res.status(400).json("Email is ok");
     const correctPassword = await validatePassword(req.body.password, user.password);
     if (!correctPassword) return res.status(400).json("Invalid Password");
     // Create a Token
     const token: string = jwt.sign(
         { _id: user.Id },
         process.env["TOKEN_SECRET"] || "");
     res.header("auth-token", token).json(token); */
};

export const profile = async (req: Request, res: Response) => {
    /* const user = await User.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).json("No User found");
    }
    res.json(user); */
};