import { Request, Response, NextFunction } from 'express'
import jwt from "jsonwebtoken";

import User from "../models/User";
import IJwtPayload from '../models/JWTPayload';

const _SECRET: string = 'api+jwt';


export async function verifyToken (req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-access-token'] as string;

    console.log(token);

    if (!token) 
      return res.status(403).json({ message: "No token provided" });

  try {
  
    const decoded = jwt.verify(token, _SECRET) as IJwtPayload;

    // Alternativas para pasar el id del IJwtPayload

    // Modificando el Type Request de Express
    req.userId = decoded.id;

    // Usando res.locals
    res.locals.UserId = decoded.id;

/* 
    Aqui revisamos que el usuario esté en la base de datos

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

    // Alternativas para pasar el id del IJwtPayload
    // Mirar function verifyToken()

    // Modificando el Type Request de Express
    const userIdRequest = req.userId;

    // Usando res.locals
    const userIdResponseLocals = res.locals.UserId;
    
    /* 
        Aqui revisamos que el usuario esté en la base de datos

        if (!user) 
          return res.status(404).json({ message: "No user found" });

    */  

    /* 
        Aqui revisamos que el usuario sea el propietario

        if (user._id != req.userId) 
          return res.status(403).json({ message: "Not Owner" });


    */  

    next();

  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};

