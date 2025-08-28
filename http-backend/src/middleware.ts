import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
export function middleware(req: Request, res: Response, next: any) {
  const token = req.headers["authorization"] ?? "";

  const decoded = jwt.verify(token, JWT_SECRET);
  if (decoded) {
    //@ts-ignore
    req.userId = decoded.userId;
  } else {
    res.status(403).json({
      message: "Unauthorized",
    });
  }
  next();
}
