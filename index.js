import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import flash from 'express-flash';
import session from 'express-session';
import pkg from 'pg-promise';
import setUsers from './sql.js';
import  routes from './routes/routes.js';

const connectionString = process.env.URL;
const Pool = pkg();
const db = Pool({
    connectionString,
    ssl: true
});

const app = express();

app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(flash());
app.use(express.json());
app.use(session({
  secret: "no secret",
  resave: false,
  saveInitialized: false
}));


const setGreeted= setUsers(db);
const getRoutes= routes(setGreeted);

app.get('/',getRoutes.getCount);
app.post('/names',getRoutes.setAllUsers);
app.get("/greeted", getRoutes.getUserNames);
app.get("/counter/:name",getRoutes.getIndividualUser);
app.post("/deleteData", getRoutes.deleteUsers);

let PORT = process.env.PORT || 5432;

app.listen(PORT, function () {

  console.log('App starting on port', PORT);

});
