"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hb3 = void 0;
const hb3 = (req, res) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render("hb3", { profes });
};
exports.hb3 = hb3;
