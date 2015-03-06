BasicGame.Menu = function(){};

BasicGame.Menu.prototype = {
	preload: function() {
		var score = 0;
		var scoreText;
	},
	create: function() {
		scoreText = myGame.add.text(16, 16, 'State Manager: Menu Loaded!', { fontSize: '32px', fill: '#fff' });
	},
	update: function() {

	}
}