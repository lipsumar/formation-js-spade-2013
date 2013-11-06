function QuestionSlide(question, answersCollection){
	this.question = question;
	this.answers = answersCollection;
}

QuestionSlide.prototype.getHTML = function(container){
	var questionHTML = '<div class="question">'+this.question.getHTML()+'</div>';

	var answersHTML = this.answers.getHTML();

	return questionHTML+answersHTML;
};






function Question(text){
	this.text = text;
}

Question.prototype = {
	getHTML: function(){
		return '<h2>'+this.text+'</h2>';
	}
};



function Answer(text, correct){
	this.text = text;
	this.correct = correct;
}

Answer.prototype.getHTML = function(){
	return '<a href="#" data-correct="'+(this.correct ? '1' : '0')+'">'+this.text+'</a>';
};





function AnswersCollection(collectionData){
	this.collection = [];
	for (var i = 0; i < collectionData.length; i++) {
		this.collection.push( new Answer(collectionData[i].text, collectionData[i].correct) );
	}
}

AnswersCollection.prototype.getHTML = function(){
	var answersHTML = '<div class="answers">';
	for (var i = 0; i < this.collection.length; i++) {
		answersHTML += this.collection[i].getHTML()+'<br>';
	}
	answersHTML+='</div>';
	return answersHTML;
};






function QuestionImage(text, image){
	Question.apply(this, arguments);
	this.image = image;
}
QuestionImage.prototype = Object.create(Question.prototype);
QuestionImage.prototype.constructor = QuestionImage;

QuestionImage.prototype.getHTML = function(){
	var parentHTML = Question.prototype.getHTML.call(this);
	parentHTML+='<img src="'+this.image+'">';
	return parentHTML;
};





var slides = [];

var data = [
	{
		type: "text",
		questionTxt: "Is javascript awesome ?",
		answers: [
			{
				text: "yes",
				correct: true
			},
			{ text: "no" }
		]
	},
	{
		type: "image",
		questionTxt: "Is this image awesome ?",
		questionImg: "awesomeImg",
		answers: [
			{
				text: "yes",
				correct: true
			},
			{ text: "no" }
		]
	}
];

for (var i = 0; i < data.length; i++) {

	if(data[i].type==="text"){
		var question = new Question(data[i].questionTxt);
	}else{
		var question = new QuestionImage(data[i].questionTxt, data[i].questionImg);
	}

	var answersCollection = new AnswersCollection(data[i].answers);
	var slide = new QuestionSlide(question, answersCollection);
	slides.push(slide);

}

document.body.innerHTML = slides[0].getHTML()+'<hr>'+slides[1].getHTML();