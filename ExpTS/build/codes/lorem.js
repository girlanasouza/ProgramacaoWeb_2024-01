"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loremParagraphs = void 0;
const lorem_ipsum_1 = require("lorem-ipsum");
const loremParagraphs = (req, res) => {
    const lorem = new lorem_ipsum_1.LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });
    const numParagrafos = parseInt(req.params.pagraphs);
    let paragrafosGerados = "";
    for (let i = 0; i < numParagrafos; i++) {
        paragrafosGerados += "<p>" + lorem.generateParagraphs(1) + "</p>";
    }
    res.send(paragrafosGerados);
};
exports.loremParagraphs = loremParagraphs;
