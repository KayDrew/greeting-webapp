import assert from "assert";
import greetName from "../greet.js";

describe("The greeting function:setName function", function() {

let greetUser=greetName();


    it("should  display Dumela and name of user", function(){

greetUser.setName("Kabelo");
      
        assert.equal("Dumela Kabelo",greetUser.getGreetings("Setswana")); // 
        greetUser.setName("mpho");
        assert.equal("Dumela mpho",greetUser.getGreetings("Setswana")); // 
      
    });

    
    it("should  display Habari and name of user", function(){
        
        
        greetUser.setName("Drew");
              
                assert.equal("Habari Drew",greetUser.getGreetings("Swahili")); // 
                greetUser.setName("Thato");
                assert.equal("Habari Thato",greetUser.getGreetings("Swahili")); //    
            });
            
       it("should  display Akwande and name of user", function(){
        
        
        greetUser.setName("Ora");
              
                assert.equal("Akwande Ora",greetUser.getGreetings("IsiNdebele")); // 
                greetUser.setName("Obakeng");
                assert.equal("Akwande Obakeng",greetUser.getGreetings("IsiNdebele")); // 
              
            });
            
            });
            
            describe("The greeting function:getCheckError function", function() {
                
                    it("should  display this 'Please select a langauge", function(){
                    	
        greetUser.setName("Lucas");
        greetUser.getGreetings("")
              assert.equal("Please select a language",greetUser.getCheckError()); // 
                     greetUser.setName("Loui");
              greetUser.getGreetings("")
                        assert.equal("Please select a language",greetUser.getCheckError()); // 
                        
                        });
                        
                           it("should  display this 'Please enter a valid name'", function(){
                           	
               greetUser.setName("Ste45");
                        greetUser.getGreetings("IsiNdebele");
                        assert.equal("Please enter a valid name",greetUser.getCheckError()); //
                      
        
        });
              
            

            
             it("should  display 'Please enter a name'", function(){
        
        
        greetUser.setName("");
              
                assert.equal("Please enter a  name",greetUser.getCheckError()); // 
              
              
            });
            
                    it("should  display 'Please enter name and select a language'", function(){
        
        greetUser.setName(); 
greetUser.getGreetings();          
                assert.equal("Please enter name and select a language",greetUser.getCheckError()); // 
                         
            });
                 });
            
            
            describe("The greeting function:getUserExists function", function() {
            
            
                it("should  not increment the counter if user has already been greeted'", function(){
        greetUser.setName("Obakeng");
                    
                assert.equal(true,greetUser.getUserExists()); // 
                         
            });
            
                          
            
                it("should  treat name as the same  regardless of casing'", function(){
        
        greetUser.setName("ora");              
                assert.equal(true,greetUser.getUserExists()); // 
                         
            });
            
                it("should  return false when the user has not been greeted yet'", function(){
        
        greetUser.setName("Benny");              
                assert.equal(false,greetUser.getUserExists()); // 
                         
            });
            
            
                         
            
   
    });






