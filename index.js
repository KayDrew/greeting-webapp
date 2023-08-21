import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import flash from 'express-flash';
import session from 'express-session';
import pkg from 'pg-promise';
import setUsers from './sql.js';

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


let setGreeted= setUsers(db);

app.get('/',setGreeted.getCount);
app.post('/names',setGreeted.setUser);
app.get("/greeted", setGreeted.getNames);
app.get("/counter/:name",setGreeted.getIndividual);
app.post("/deleteData", setGreeted.deleteData);

let PORT = process.env.PORT || 5432;

app.listen(PORT, function () {

  console.log('App starting on port', PORT);

});
