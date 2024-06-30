import { Request, Response } from "express";

const index = (req: Request, res: Response) => {
  res.send("Hello world!");
};

export default { index };
