
export  default    function setUsers(db){
	
let names={};
let individual={};
let name = "";
	let error = "";
	let greetedNames = {};
	let regex = /^([a-zA-Z]{3,})$/;
	let greeting = "";
	let count = 0;
	let languages = {
		"Swahili": "Habari",
		"Setswana": "Dumela",
		"IsiNdebele": "Akwande"
	}

async function setUser(req,res,next){
	
let names1={};
let countUser=1;
 let input=req.body.username;
 let language = req.body.language;
 
//check if input is empty
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
 
 
 
 
  //sql code
try {
	
	const result=  await db.manyOrNone(  `SELECT * FROM  users.name`  );              
    let len=result;	
     
     
   if(len.length<1){

       if(name && language){
		
        const newItem = await db.none(
            `INSERT INTO users.name (name,count) VALUES ($1,$2)`, [name,countUser]
             );
        }
}     

     else {     
     	
     	if(name && language){
     	
     	
       for(let i=0;i<len.length;++i){

        var user=len[i];

      if(name===user.name){
     	
     countUser=user.count+1;
     const update=await db.none(`UPDATE users.name SET  count=$2 WHERE name=$1`,[name, countUser]);
      name="";
}
}

}

	if(name && language){
		
        const newItem = await db.none(
            `INSERT INTO users.name (name,count) VALUES ($1,$2)`, [name,countUser]
             );
        }
        
        }
        
        
          res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
    
  }
    
    
    
 async function getCount(req,res,next){
    	
  try {
	
        const items = await db.manyOrNone(
            `SELECT * FROM  users.name`           
        );
        
     let allItems= items;
      count=allItems.length;
       
    req.flash("error", error);
    res.render('index', {
    greeting: greeting,
    title: "Home",
    count: count
}

);
             
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }    
    
}   


async function  getNames(req,res,next){
	
try {
const result= await db.manyOrNone(
         `SELECT name FROM  users.name`           
        );
        	
     names= result;
     
     error="";     
     res.render("greeted",{ usersGreeted:names});
     
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    } 


}



async function deleteData(req,res,next){
	
 try {
         
          await db.none(
            `DELETE  FROM  users.name`         
        );
        
        res.redirect("/");
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    } 


}



async  function  getIndividual(req,res,next){
	
	let username=req.params.name;
	
  try {
  	
	const result=  await db.oneOrNone(  `SELECT * FROM  users.name WHERE name=$1` ,[username]);             	
     individual= result;
     
     res.render("counter",{
	name: individual

});
    
     }catch(err){
     	
console.log(err);
}

return individual;
}


return{    	
setUser,
getNames,
getCount, 
getNames,
deleteData,
getIndividual  

   }
    }
    
    
  
