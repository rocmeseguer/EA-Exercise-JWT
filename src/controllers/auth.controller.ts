import { Request, Response } from 'express'
import jwt from "jsonwebtoken";

import User from '../models/User';
import Todo from '../models/Todo';

const _SECRET: string = 'api+jwt';


export async function signin(req: Request, res: Response): Promise<Response> {
    console.log('Log in');
    const username = req.body.username;
    const password = req.body.password;
    const userFound = await User.findOne({ 'username': username});

    if (!userFound) return res.status(400).json({ message: "User Not Found" });

    if (userFound.password != password) return res.status(401).json({
            token: null,
            message: "Invalid Password",
        });

    const token = jwt.sign({ id: userFound._id }, _SECRET, {
            expiresIn: 86400, // 24 hours
        });
    
    console.log (token);
    return res.json(token);
};