"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.URL_DB}/produtos`);
    const produtos = yield response.json();
    res.render("produto/index", { produtos });
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method === 'GET') {
        res.render('produto/');
    }
});
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    res.end(id);
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.default = { index, read, create, update, remove };
