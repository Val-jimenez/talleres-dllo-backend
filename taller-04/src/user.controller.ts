import { Request, Response } from 'express';
import { users, IUser } from './user.model';

// Punto 1
export const getUsersByHobby = (req: Request, res: Response) => {
  const { hobby } = req.query;
  const usersWithHobby = users.filter(user => user.hobbies.includes(hobby as string));
  res.json(usersWithHobby);
};

// Punto 2
export const userExists = (req: Request, res: Response) => {
  const { id } = req.query;
  const user = users.find(user => user.id === Number(id));
  res.json({ exists: !!user });
};

// Punto 3
export const getTeamExperience = (req: Request, res: Response) => {
  const { team } = req.query;
  const usersInTeam = users.filter(user => user.team === team);
  const totalExperience = usersInTeam.reduce((acc, user) => acc + user.years, 0);
  res.json({ totalExperience });
};

// Punto 4
export const getUsersByFaction = (req: Request, res: Response) => {
  const { faction } = req.query;
  const usersInFaction = users.filter(user => user.faction === faction);
  res.json(usersInFaction);
};

// Punto 5
export const addUser = (req: Request, res: Response) => {
  const newUser: IUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: 'Usuario agregado', user: newUser });
};
