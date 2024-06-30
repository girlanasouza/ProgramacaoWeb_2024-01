import { Request, Response } from "express";

const index = (req: Request, res: Response) => {
  res.send("Hello world!");
};

const hb1 = (req: Request, res: Response) => {
  res.render("hb1", {
    mensagem: "Olá, você está aprendendo Express + HBS!",
    layout: false,
  });
};

const hb2 = (req: Request, res: Response) => {
  res.render("hb2", {
    poweredByNodejs: true,
    name: "Express",
    type: "Framework",
    layout: false,
  });
};

const hb3 = (req: Request, res: Response) => {
  const profes = [
    { nome: "David Fernandes", sala: 1238 },
    { nome: "Horácio Fernandes", sala: 1233 },
    { nome: "Edleno Moura", sala: 1236 },
    { nome: "Elaine Harada", sala: 1231 },
  ];
  res.render("hb3", { profes, layout: false });
};

export default { index, hb1, hb2, hb3 };
