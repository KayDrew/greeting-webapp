
export  default    function setUsers(db){
	

let count=0;
let names={};
let individual={};


async function setUser(name,language){

let username=name;
let names1={};
let count=1;

try {
	const result=  await db.manyOrNone(  `SELECT * FROM  users.name`  );              
        
let len=result;	
     
     
     if(len.length<1){

if(username && language){
		
        const newItem = await db.none(
            `INSERT INTO users.name (name,count) VALUES ($1,$2)`, [name,count]
             );
        }
}     
     else {     
     	
     	if(username && language){
     	
     for(let i=0;i<len.length;++i){

var user=len[i];

     if(username===user.name){
     	
     count=user.count+1;
 const update=await db.none(`UPDATE users.name SET  count=$2 WHERE name=$1`,[username, count]);
username="";
}
}

}

	if(username && language){
		
        const newItem = await db.none(
            `INSERT INTO users.name (name,count) VALUES ($1,$2)`, [name,count]
             );
        }
        
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
    
    }
    
    
    async function setCount(){
    	
try {
	
        const items = await db.manyOrNone(
            `SELECT * FROM  users.name`           
        );
        
        let allItems= items;
        
       count=allItems.length;
             
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }    

}   


async function  setNames(){
	
try {
const result= await db.manyOrNone(
         `SELECT name FROM  users.name`           
        );
        	
     names= result;
     
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    } 

}


async function deleteData(){
	
try {
         
           await db.none(
            `DELETE  FROM  users.name`           
        );
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    } 

}

async function  getNames(){

return names;
}

async function getCount(){

return count;
}


async  function  setIndividual(name){
	
		
try {
	const result=  await db.oneOrNone(  `SELECT * FROM  users.name WHERE name=$1` ,[name]);             	
     individual= result;
     
console.log(individual);


     }catch(err){
     	
console.log(err);
}


}

async function getIndividual(){

return individual;
}

    return{

setUser,
setCount,
setNames,
getCount, 
getNames,
deleteData,
setIndividual,
getIndividual 


}
    }
    
    
  
