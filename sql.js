
export  default    function setUsers(db){
	
    	let count=0;
    let names={};
    let individual={};
    

async function setUser(name,language){
	
let countUser=1; 


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
               
          
    } catch (error) {
        console.log(error);
        
    }
    
  }
        
    
 async function getCount(){

  try {
	
        const items = await db.manyOrNone(
            `SELECT * FROM  users.name`           
        );
        
     let allItems= items;
      count=allItems.length;
       
             
    } catch (error) {
        console.log(error);
        
    }    
    
    return  count;
}   


async function  getNames(){
	
try {
const result= await db.manyOrNone(
         `SELECT name FROM  users.name`           
        );
        	
     names= result;
     
     
    } catch (error) {
        console.log(error);
        
    } 

return names;

}



async function deleteData(){
	
 try {
         
          await db.none(
            `DELETE  FROM  users.name`         
        );
        
       
        
    } catch (error) {
        console.log(error);
       
    } 


}



async  function  getIndividual(username){
	
	
  try {
  	
	const result=  await db.oneOrNone(  `SELECT * FROM  users.name WHERE name=$1` ,[username]);             	
     individual= result;
     
    
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
    
    
  
