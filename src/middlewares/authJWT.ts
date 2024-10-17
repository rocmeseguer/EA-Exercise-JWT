import { Request, Response, NextFunction } from 'express'
import jwt from "jsonwebtoken";

import User from "../models/User";
import Todo from '../models/Todo';
import IJwtPayload from '../models/JWTPayload';

const _SECRET: string = 'api+jwt';


export async function verifyToken (req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-access-token'] as string;

    console.log(token);

    if (!token) 
      return res.status(403).json({ message: "No token provided" });

  try {
  
    const decoded = jwt.verify(token, _SECRET) as IJwtPayload;
    req.userId = decoded.id;
/* 
    No revisamos que el usuario esté en la base de datos
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) 
      return res.status(404).json({ message: "No user found" });
*/    
    next();

  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};


export async function isOwner (req: Request, res: Response, next: NextFunction) {
  try {
    const user = await User.findById(req.userId);

    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);

    if (!todo) 
      return res.status(403).json({ message: "No user found" });

    if (todo.user != req.userId) 
      return res.status(403).json({ message: "Not Owner" });

    next();

  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};

