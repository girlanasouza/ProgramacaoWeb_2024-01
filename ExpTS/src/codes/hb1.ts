import { Request, Response } from 'express';

export const hb1 = (req: Request, res: Response) => {
    res.render("hb1", {
        mensagem: 'Olá, vc está aprendendo Express + HBS!!'
    });
};