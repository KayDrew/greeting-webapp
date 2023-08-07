export default function greet(){


	let name="";
	let error="";
	let greetedNames={};
	let regex=/[A-Za]/g;
	let greeting="";
	let count=0;
	let languages={"Swahili":"Habari",
"Setswana":"Dumela",
"IsiNdebele":"Akwande"}

	function setName(input){

		if(input){

			if(regex.test(input.toUpperCase())){

				//console.log("pass")
			
		
			if(!greetedNames.hasOwnProperty(input)){

		name=input.toUpperCase();
		error="";
		greetedNames.name=1;

			}
			else{
				greetedNames.name+=1;
			}

		}

		else{
			error="Name should only contain letters";
		}

	}

		else{

			error="Please enter a name";
		}

	}

	function getName(){

		return name;
	}

	function getError(){

		return error;
	}

	function setGreeting(language){

if(getName()){

	if(languages.hasOwnProperty(language)){

		greeting=languages[language]+" "+name;
	}

	else{

		error="Please select a language";
		greeting="";
	}

}

else{

	greeting="no name"
}
	}



	function getGreeting(){

		return greeting;
	}

	return{

		setName,
		getName,
		getError,
		setGreeting,
		getGreeting
	}
}