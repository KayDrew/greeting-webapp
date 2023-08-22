import 'dotenv/config';
import assert from 'assert';
import userData from '../sql.js';
import pkg from 'pg-promise';
const connectionString = process.env.URL;
const Pool = pkg();
const db = Pool({
    connectionString,
    ssl: false
});

let user= userData(db);

describe('The greeting web app',async function(){
	

   beforeEach(async function () {
	
    try {
        	
       await user.deleteData();
           }catch(err){

         console.log(err);
}
        
}  );
      

 it('should return the total number of the users that have been greeted', async function(){
       assert.equal(0, await user.getCount());
});
        
    
    
    
    it('should return the name of the user/s greeted', async function(){
                          
   let arr=[];
                            
  
                 	
       await user.setUser("Reggie","Swahili");
       arr=await user.getNames();
        assert.equal("Reggie",arr[0].name);

    });
    
    
    
     it('should return the total times a specific user has been greeted', async function(){
     	
     let individual={};

     
            	
      await user.setUser("Reggie","Swahili");
      await user.setUser("Reggie","Setswana");
      individual =await user.getIndividual("Reggie");
     	
       assert.equal(2,individual.count);
});
    
    
     
  it('should not add name to database if user has already been greeted', async function(){
     	
     let arr=[];
     
    try {
       await user.setUser("Drew","Swahili");
       await user.setUser("Drew","Setswana");
       arr=await user.getNames();
  
        }catch(err){

     console.log(err);
   }
   
       assert.equal(1,arr.length);

});


    
 it('should delete all the user data', async function(){
     	
   let arr=[];
   
    try {
       await user.setUser("Leo","Swahili");
       await user.setUser("Leo","Setswana");     
       arr=await user.deleteData();
       arr=await user.getNames();
       
           }catch(err){

console.log(err);
}
assert.equal(0,arr.length);

});


     it('should be able to add  more users', async function(){
     	
   let arr=[];
   
  try {
    	
       await user.setUser("Leo","Swahili");
       await user.setUser("Sara","Setswana");
       await user.setUser("Sipho","Setswana");
       arr=await user.getNames();
       
       
           }catch(err){

       console.log(err);
}

assert.equal(3,arr.length);

});
     	

       after(function () {
        db.$pool.end;
    });
    
    
    
   
});
