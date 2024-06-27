"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hb1 = void 0;
const hb1 = (req, res) => {
    res.render("hb1", {
        mensagem: 'Olá, vc está aprendendo Express + HBS!!'
    });
};
exports.hb1 = hb1;
