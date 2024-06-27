import express from 'express';
import { engine } from 'express-handlebars';
import router from './router/router'; 
import sass from 'node-sass-middleware';

const app = express();
const PORT = process.env.PORT || 3333;
require('dotenv').config();

app.engine('handlebars', engine({
  layoutsDir: `${__dirname}/views/layouts`,
  helpers: require(`${__dirname}/views/helpers/helpers.ts`),
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

app.use('/img', [
  express.static(`${__dirname}/../public/img`)
]);

app.use(sass({
  src: `${__dirname}/../public/scss`,
  dest: `${__dirname}/../public/css`,
  outputStyle: "compressed",
  prefix: "/css",
}));

app.use("/css", express.static(`${__dirname}/../public/css`));

app.use('/js', [
  express.static(`${__dirname}/../public/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`)
]);

app.use(express.urlencoded({extended: false}));

app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}`);
});
