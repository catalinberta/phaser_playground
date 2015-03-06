var BasicGame = {}; //declare the object that will hold all game states
BasicGame.Boot = function(game){};

BasicGame.Boot.prototype = {
	preload: function() {
		this.load.image('loadingBar', 'img/loadbar.jpg');
	},
	create: function() {
		this.input.maxPointers = 1;
    	this.stage.disableVisibilityChange = true;
		this.state.start('Preload');
	},
	update: function() {

	}
}