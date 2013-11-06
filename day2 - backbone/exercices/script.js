$(document).ready(function(){

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

	var Person = Backbone.Model.extend();

	var PersonView = Backbone.View.extend({
		tagName: 'li',
		template: _.template( $('#personTpl').html() ),

		render: function(){
			$(this.el).html( this.template(this.model.toJSON()) );
			console.log(this.el);
		}
	});




	var PersonsCollection = Backbone.Collection.extend({
		model: Person
	});

	var PersonsCollectionView = Backbone.View.extend({
		render: function(){
			this.collection.each(_.bind(function(person){
				var personView = new PersonView({model: person});
				personView.render();
				this.$el.append(personView.el);
			},this));
		}
	});


	var allPersons = new PersonsCollection(persons);

	var allPersonsView = new PersonsCollectionView({
		collection:allPersons,
		el: $('.persons')
	});

	allPersonsView.render();




});
