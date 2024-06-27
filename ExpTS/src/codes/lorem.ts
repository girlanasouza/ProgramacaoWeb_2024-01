import { Request, Response } from 'express';
import { LoremIpsum } from "lorem-ipsum";

export const loremParagraphs = (req: Request, res: Response) => {
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