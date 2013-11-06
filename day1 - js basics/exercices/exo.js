console.log ('test');
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
hobbies: ['be woried about Walter'],
image: 'skyler-white.jpg'
},
{
name: 'Jesse Pinkman',
gender: 'male',
hobbies: ['smoke meth', 'sell meth', 'say BITCH'],
image: 'jesse-pinkman.jpg'
}
];

var s ='';

function stringHobbies (arr){
	for (var i=0; i < arr.length; i++){
		if (i===0)
			s+= arr [i];
		else if (i=== arr.length-1)
			s += ' et ' + arr [i];
		else
			s += ',  ' + arr [i];
	}
	return s;
}

function describePerson (obj){
	s+= obj.name + ' is '+ firstJob(obj.job) + secondJob(obj.job2) + '. ';

	s+= gender(obj.gender) + ' likes to ' + stringHobbies(obj.hobbies) +'.';
	return s;
}
function firstJob (fJob){
	if (!fJob || fJob=== undefined){
		fJob= 'unemployed';
	}
	return fJob;
}

function secondJob(sJob){
	if (sJob || sJob!== undefined){
		return ' and ' +sJob;
	}
	return '';
}
function gender(g){
	if (g==='male'){
		return 'He';
	}
	else {
		return 'She';
	}
}
console.log ( describePerson(persons[0]));