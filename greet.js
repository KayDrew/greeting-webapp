export default function greet() {


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

	function setName(input) {

		if (input) {

			if (regex.test(input.trim())) {
var cap = "";
			var low = "";
			for (let i = 0; i < input.length - 1; ++i) {

				cap = input.charAt(0).toUpperCase();
				low += input.charAt(i + 1).toLowerCase();
			}
			
					name = cap+low;
					error = "";

			}

			else {
				error = "Name should only contain letters";
				name = "";
			}

		}

		else {

			error = "Please enter a name";
			name = "";
		}

	}

	function getName() {

		return name;
	}

	function getError() {

		return error;
	}

	function setGreeting(language) {

		if (getName()) {

			if (languages.hasOwnProperty(language)) {

				greeting = languages[language] + " " + name;

				
				if (!greetedNames.hasOwnProperty(name)) {
					greetedNames[name]= 1;
					
					count++;
				}


				else {
					greetedNames[name] += 1;
				}

				
			}

			else {

				error = "Please select a language";
				greeting = "";
			}

		}

		else {

			greeting = "";
		}
	}



	function getGreeting() {

		return greeting;
	}


	function getCount() {

		return count;
	}

	function  greeted(){
           return  greetedNames;

	}
	
	function getIndividual(name){

const filteredGreetedNames={};

if(greetedNames.hasOwnProperty(name)){

filteredGreetedNames["name"]=name;
filteredGreetedNames["count"]=greetedNames[name];
console.log(filteredGreetedNames);
return filteredGreetedNames;


}
}
	
	return {

		setName,
		getName,
		getError,
		setGreeting,
		getGreeting,
		getCount,
		greeted,
		getIndividual
	}
}