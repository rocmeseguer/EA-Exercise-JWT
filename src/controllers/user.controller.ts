import { Request, Response } from 'express'

import IUser from '../models/User';

export async function createUser (req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  console.log('Creating user');

  const newUser = { username, password } as IUser;

/* 
  Aqui lo guardamos en la base de datos
*/

  return res.json(newUser);
}

export async function getUsers (req: Request, res: Response): Promise<Response> {
  console.log('Get users');

  /* 
  Aqui la base de datos
  */

  const users: IUser[] = [
    { username: "user1", password: 'password1' },
    { username: "user2", password: 'password2' },
    { username: "user3", password: 'password3' }
  ];
  
  return res.json(users);
}

export async function getUser(req: Request, res: Response): Promise<Response> {
  console.log('Get user');
  const id = req.params.id;

 /* 
  Aqui la base de datos
  */

  const user: IUser = { username: "user1", password: 'password1' };

  return res.json(user);
}

export async function deleteUser(req: Request, res: Response): Promise<Response> {
  console.log('Delete user');
  const id = req.params.id;
 /* 
  Aqui la base de datos
  */

  const user: IUser = { username: "user1", password: 'password1' };

  return res.json(user);
}

export async function updateUser(req: Request, res: Response): Promise<Response> {
  console.log('Updating user');
  const _id = req.params.id;
  const { username, password } = req.body;

  const user = { username, password } as IUser;

/* 
  Aqui lo guardamos en la base de datos
*/

  return res.json(user);
}
