var fruits = ['pomme', 'citron', 'poire', 'coco', 'banana'];

function bestFruits(fruits){
	var ret = '';
	for(var i=0;i<fruits.length;i++){
		ret = ret + fruits[i];

		if(i>=fruits.length-1){
			ret = ret + '.';
		}
		else if(i>=fruits.length-2){
			ret = ret + ' et ';
		}else{
			ret = ret + ', ';
		}
		//ret+="\n";
	}
	return ret;
}

var result = bestFruits(fruits);

console.log('Mes fruits préférés sont '+result);

