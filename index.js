import 'dotenv/config';
//console.log(process.env.DATABASE_URL);
import express from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import greet from './greet.js';
import flash from 'express-flash';
import session from 'express-session';



const app = express();


app.use(express.static('public'));
app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(session({
  secret: "no secret",
  resave: false,
  saveInitialized: false
}));


// which db connection to use
const connectionString=process.env.URL;

//console.log(db);

app.use(flash());


const user = greet();


app.get('/', function (req, res) {

  req.flash("error", user.getError());


  res.render('index', {
    greeting: user.getGreeting(),
    title: "Home",
    count: user.getCount()

  });

}
);

app.post('/names', async function (req, res) {

  user.setName(req.body.username);
  let language = req.body.language;

  user.setGreeting(language);
 
  user.getError();
  
//await db.none("insert into greetedNames('drew',4)");
  
  res.redirect('/');

});

app.get("/greeted", function (req, res){
res.render ('greeted',{
usersGreeted: user.greeted()
});

});


app.get("/counter/:name", function (req, res){

let username=req.params.name;


let greetedUser=user.getIndividual(username);


res.render("counter",{
	name: greetedUser

});

});



let PORT = process.env.PORT || 8080;



app.listen(PORT, function () {

  console.log('App starting on port', PORT);

});