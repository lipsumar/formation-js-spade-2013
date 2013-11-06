var persons = [
	{
		name: 'Walter White',
		gender: 'male',
		job: 'Chemistery teacher',
		job2: 'Drug lord',
		hobbies: ['cook meth', 'make bombs'],
		image: 'walter-white.png'
	},
	{
		name: 'Hank Schrader',
		gender: 'male',
		job: 'DEA agent',
		hobbies: ['track criminals', 'brew beer'],
		image: 'hank-schrader.jpg'
	},
	{
		name: 'Skyler White',
		gender: 'female',
		job: 'Accountant',
		hobbies: ['be worried about Walter'],
		image: 'skyler-white.jpg'
	},
	{
		name: 'Jesse Pinkman',
		gender: 'male',
		hobbies: ['smoke meth', 'sell meth', 'say BITCH'],
		image: 'jesse-pinkman.jpg'
	}
];

function getEnumerationString(fruits){
	var ret = '';
	for(var i=0;i<fruits.length;i++){
		ret = ret + fruits[i];

		if(i>=fruits.length-1){
			//ret = ret + '.';
		}
		else if(i>=fruits.length-2){
			ret = ret + ' and ';
		}else{
			ret = ret + ', ';
		}
		//ret+="\n";
	}
	return ret;
}

function profile(person){
	var whatGender = '';

	if(person.gender==="male"){
		whatGender = "He";
	}else{
		whatGender = "She";
	}

	if(!person.job){
		person.job = 'fucking lazy';
	}
	console.log(person.name + ' is ' + person.job + '. ' + whatGender + ' likes to ' + getEnumerationString(person.hobbies) + '.' );
}



for(var i=0; i<persons.length; i++) {
	profile(persons[i]);
}

