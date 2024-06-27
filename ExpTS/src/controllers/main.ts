import { Request, Response } from "express";
import { LoremIpsum } from "lorem-ipsum";

const index =(req:Request, res:Response) =>{
    res.render('layouts/main', {layout: 'main'});
};

const hb1 = (req: Request, res: Response) => {
    res.render("main/hb1", {
        mensagem: 'Olá, vc está aprendendo Express + HBS!!'
    });
};

const hb2 = (req: Request, res: Response) => {
    res.render("main/hb2", {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
        layout: false,
    });
}

const hb3 = (req: Request, res: Response) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render("main/hb3", { profes });
};

const hb4 = (req: Request, res: Response) => {
    const technologies = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
    ];
    res.render("main/hb4", { technologies });
}

const loremParagraphs = (req: Request, res: Response) => {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
    });
    
    const numParagrafos: number = parseInt(req.params.pagraphs);

    let paragrafosGerados: string = "";
    for (let i = 0; i < numParagrafos; i++){ 
        paragrafosGerados += "<p>" + lorem.generateParagraphs(1) + "</p>";
    }

    res.send(paragrafosGerados);

}

export default {index, hb1, hb2, hb3, hb4, loremParagraphs};