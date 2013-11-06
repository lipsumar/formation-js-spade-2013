$(document).ready(function(){


	var TodoModel = Backbone.Model.extend({
		defaults:{
			title: 'no title',
			done: false
		}
	});

	var TodoView = Backbone.View.extend({
		template: _.template($('#todo-item-tpl').html()),
		render: function(){
			this.$el.html( this.template(this.model.toJSON()) );
			console.log(this.el);
		}
	});

	var TodoCollection = Backbone.Collection.extend({
		model: TodoModel
	});

	var TodoCollectionView = Backbone.View.extend({
		render: function(){
			var that = this;
			this.collection.each(function(todo){
				var todoView = new TodoView({model: todo});
				todoView.render();
				that.$el.append(todoView.el);
			});
		}
	});



	var AppView = Backbone.View.extend({

		initialize: function(){
			this.todos = new TodoCollection();
			this.todosView = new TodoCollectionView({
				collection: this.todos,
				el: $('ul.todos')
			});
		},

		events: {
			'keyup input[type="text"]': 'keyPressed'
		},

		keyPressed: function(e){
			if(e.keyCode===13){
				//enter
				this.createNewTodo();
			}
		},

		createNewTodo: function(){
			var todo = new TodoModel({
				title: this.$el.find('input[type="text"]').val()
			});

			this.todos.add(todo);
		}

	});

	window.app = new AppView({
		el: $('#app')
	});

});