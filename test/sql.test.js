import assert from 'assert';
import userData from '../sql.js';
import pkg from 'pg-promise';

// we are using a special test database for the tests
const connectionString = process.env.URL;
const Pool = pkg();
const db = Pool({
    connectionString,
    ssl: true
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
      
          
       
    it('should pass the db test', async function(){
             
        assert.equal(0,user.getNames());

    });

   
   
       after(function () {
        db.$pool.end;
    });
   
});
