import { Request, Response } from 'express';

export const hb2 = (req: Request, res: Response) => {
    res.render("hb2", {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
        layout: false,
    });
}