myGame.loadbar = function(){};

myGame.loadbar.prototype = {
	preload: function() {
		var score = 0;
		var scoreText;
	},
	create: function() {
		scoreText = myGame.add.text(16, 16, 'State Manager: Loadbar', { fontSize: '32px', fill: '#fff' });
	},
	update: function() {

	}
}