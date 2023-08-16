import pkg from 'pg';


export  default    function setUsers(){
	
const { Pool } = pkg;

const itemsPool = new Pool({
    connectionString: process.env.URL,
    ssl: true
});

let count=0;
let names={};


async function setUser(name){

let username=name;
let names1={};
try {
	const result=  await itemsPool.query(  `SELECT * FROM  users.users`  );         
        
        	
     names1= result.rows;
     
     for(let i=0;i<names1.length;++i){

var user=names1[i];
     if(username===user.name){

username="";
}
}

	if(username){
        const newItem = await itemsPool.query(
            `INSERT INTO users.users (name) VALUES ($1)`, [name]
             );
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
    
    }
    
    
    async function setCount(){
    	
    try {
	
        const items = await itemsPool.query(
            `SELECT * FROM  users.users`           
        );
        
        let allItems= items;
        count=allItems.rows.length;
       // console.log(count);
        
 
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    } 
   
  // return count;

}   


async function  setNames(){
	
	
try {
const result=      await itemsPool.query(
         `SELECT * FROM  users.users`           
        );
        	
     names= result.rows;
      
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    } 


}


async function deleteData(){
	
try {
         await itemsPool.query(
            `DELETE  FROM  users.users`           
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

    return{

setUser,
setCount,
setNames,
getCount, 
getNames,
deleteData 

}
    }
    
    
  
