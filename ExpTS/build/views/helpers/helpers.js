"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTec = exports.listProfs = void 0;
function listProfs(profs) {
    const list = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`);
    return `<ul>${list.join('')}</ul>`;
}
exports.listProfs = listProfs;
function listTec(tec) {
    const filterTec = tec.filter((t) => t.poweredByNodejs === true);
    const list = filterTec.map((t) => `<li>${t.name}-${t.type}</li>`);
    return `<ul>${list.join('')}</ul>`;
}
exports.listTec = listTec;
