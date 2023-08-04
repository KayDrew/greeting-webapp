import express  from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import greet from './greet.js';
const app = express();



app.use(express.static('public'));
app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())




app.get('/', function (req, res) {

    res.render('index');

}
);

let PORT = process.env.PORT || 3007;



app.listen(PORT, function(){

  console.log('App starting on port', PORT);

});