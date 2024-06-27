"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const router_1 = __importDefault(require("./router/router"));
const node_sass_middleware_1 = __importDefault(require("node-sass-middleware"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
app.engine('handlebars', (0, express_handlebars_1.engine)({
    layoutsDir: `${__dirname}/views/layouts`,
    helpers: require(`${__dirname}/views/helpers/helpers.ts`),
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);
app.use('/img', [
    express_1.default.static(`${__dirname}/../public/img`)
]);
app.use((0, node_sass_middleware_1.default)({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    outputStyle: "compressed",
    prefix: "/css",
}));
app.use("/css", express_1.default.static(`${__dirname}/../public/css`));
app.use('/js', [
    express_1.default.static(`${__dirname}/../public/js`),
    express_1.default.static(`${__dirname}/../node_modules/bootstrap/dist/js/`)
]);
app.use(router_1.default);
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}`);
});
