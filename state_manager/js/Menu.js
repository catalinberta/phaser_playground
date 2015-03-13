Nameless.Menu = function(){};

Nameless.Menu.prototype = {
	preload: function() {
		var score = 0;
		var scoreText;
	},
	create: function() {
		this.start_game = this.add.sprite(80,100, 'start_game');
		this.start_game.inputEnabled = true;
	},
	update: function() {
		this.start_game.events.onInputDown.add(clickedMenu,this);
	}
}
function clickedMenu() {
	this.state.start('Level1')
}