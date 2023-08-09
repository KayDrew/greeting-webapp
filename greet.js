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

			if (regex.test(input.toUpperCase())) {

					name = input.toUpperCase();
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
					console.log(greetedNames);
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

	return {

		setName,
		getName,
		getError,
		setGreeting,
		getGreeting,
		getCount
	}
}
