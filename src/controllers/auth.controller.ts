import { Request, Response } from 'express'
import jwt from "jsonwebtoken";
import { userService } from '../services/user.service';
import IJwtPayload from '../models/JWTPayload';
import IUser from '../models/User';

const _SECRET: string = 'api+jwt';

export async function signup(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    // Check if user already exists
    const existingUser = await userService.findOne(username);
    if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
    }

    // Create new user
    const newUser = { username, password } as IUser;
    const createdUser = await userService.create(newUser);

    // Generate token for new user
    const session = { 'id': username } as IJwtPayload;
    const token = jwt.sign(session, _SECRET, {
        expiresIn: 86400, // 24 hours
    });

    return res.status(201).json({ user: createdUser, token });
}

export async function signin(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const user = await userService.findOne(username);
    
    if (!user) {
        return res.status(400).json({ message: "User Not Found" });
    }

    if (user.password !== password) {
        return res.status(401).json({ message: "Invalid Password" });
    }

    const session = { 'id': username } as IJwtPayload;

    const token = jwt.sign(session, _SECRET, {
        expiresIn: 86400, // 24 hours
    });
    
    console.log(token);
    return res.json(token);
}