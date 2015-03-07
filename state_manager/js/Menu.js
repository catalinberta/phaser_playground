Nameless.Menu = function(){};

Nameless.Menu.prototype = {
	preload: function() {
		var score = 0;
		var scoreText;
	},
	create: function() {
		this.start_game = this.add.sprite(80,100, 'start_game');
	},
	update: function() {

	}
}