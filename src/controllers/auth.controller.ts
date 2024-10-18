import { Request, Response } from 'express'
import jwt from "jsonwebtoken";

import IUser from '../models/User';
import IJwtPayload from '../models/JWTPayload';

const _SECRET: string = 'api+jwt';


export async function signin(req: Request, res: Response): Promise<Response> {
    
    const username = req.body.username;
    const password = req.body.password;

    if (!username) 
        return res.status(400).json({ message: "Without parameters" });

    if (!password) 
        return res.status(400).json({ message: "Without parameters" });

    /*

    Aqui comprobamos que el usuario exista y que el password sea correcto
    
    if (!userFound) 
        return res.status(400).json({ message: "User Not Found" });

    if (userFound.password != password) 
        return res.status(401).json({ message: "Invalid Password" });

    */

    const session = { 'id': username } as IJwtPayload;

    const token = jwt.sign(session, _SECRET, {
            expiresIn: 86400, // 24 hours
        });
    
    console.log (token); 
    return res.json(token);

};