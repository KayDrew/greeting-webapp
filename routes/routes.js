export default function  modGetData(setUsers){

let name = "";
	let error = "";
	let greetedNames = {};
	let regex = /^([a-zA-Z]{3,})$/;
	let greeting = "";
	let languages = {
		"Swahili": "Habari",
		"Setswana": "Dumela",
		"IsiNdebele": "Akwande"
	}


async function getCount(req,res,next){

try{
	
let count= await  setUsers.getCount();

req.flash("error", error);
    res.render('index', {
    greeting: greeting,
    title: "Home",
    count: count
    
    });
    
   }catch(err){

console.log(err);

}

}

async function deleteUsers(req,res,next){

try{await setUsers.deleteData();

error="";
res.redirect("/");

} catch(err){

next(err);
}

}


async  function  getIndividualUser(req,res,next){

let username=req.params.name;

try{
let individual =await setUsers.getIndividual(username);

res.render("counter",{
	name: individual

});

} catch(err){


console.log(err);
}

}


async function  getUserNames(req,res,next){


try{
	
error="";     
let names= await setUsers.getNames()

     res.render("greeted",{ 
usersGreeted:names

});
     
     }catch(err){

console.log(err);

}
     
     
}

async function setAllUsers(req,res,next){

 let input=req.body.username;
 let language = req.body.language;
  
 if(input){

 //check if input passes regex test
if (regex.test(input.trim())) {
	
	//trim input
var trimmed=input.trim();

var cap = "";
var low = "";

for (let i = 0; i < trimmed.length - 1; ++i) {

	cap = trimmed.charAt(0).toUpperCase();
   low += trimmed.charAt(i + 1).toLowerCase();
}
	
	//capitalise first letter, make all others small letters
	name = cap+low;
    error = "";

	}
			

			else {
				error = "Name should only contain letters";
				name = "";
			}
 
 } else{
error ="Please, enter a name";

}
 
 
 if (languages.hasOwnProperty(language)) {

	greeting = languages[language] + " " + name;
				} else{

error = "Please select a language";
greeting = "";
}
 
 
 try{
 	
 await setUsers.setUser(name,language);
 	
 res.redirect('/');

}catch(err){

console.log(err);
}

}

return{

getCount,
deleteUsers, 
getIndividualUser,
getUserNames,
setAllUsers 
}

  }
