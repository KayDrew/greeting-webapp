import 'dotenv/config';
//console.log(process.env.DATABASE_URL);
import express from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import greet from './greet.js';
import flash from 'express-flash';
import session from 'express-session';
import pkg from 'pg';

import setUsers from './sql.js';


const app = express();


app.use(express.static('public'));
app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.json());

app.use(session({
  secret: "no secret",
  resave: false,
  saveInitialized: false
}));

let setGreeted= new setUsers();


// which db connection to use

//console.log(db);

app.use(flash());


const user = await greet();


app.get('/',async function (req, res,next) {

  req.flash("error", user.getError());
 // setGreeted.setCount();
  let result= await setGreeted.setCount();
  let count= await setGreeted.getCount()
 
 //console.log(count);
    
  res.render('index', {
    greeting: user.getGreeting(),
    title: "Home",
    count: count

  });

}
);

app.post('/names',async function (req, res,next) {

  user.setName(req.body.username);
  let language = req.body.language;

 await user.setGreeting(language);
 
  user.getError();
  
  let name=await user.getName();
  let count=await user.getCount();  
  

setGreeted.setUser(name);

  res.redirect('/');

});





app.get("/greeted", async function (req, res,next){
	
	
await setGreeted.setNames();

res.render ('greeted',{
 usersGreeted:await setGreeted.getNames()

});

});


app.get("/counter/:name",async function (req, res,next){

let username=req.params.name;

//console.log(user.getIndividual(username));


let greetedUser=user.getIndividual(username);


res.render("counter",{
	name: greetedUser

});

});

app.post("/deleteData", async function(req,res,next){


let result= await setGreeted.deleteData();

res.redirect("/");

});



let PORT = process.env.PORT || 5432;



app.listen(PORT, function () {

  console.log('App starting on port', PORT);

});
