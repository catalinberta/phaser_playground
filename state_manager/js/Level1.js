Nameless.Level1 = function(){};

Nameless.Level1.prototype = {
	preload: function() {
		var score = 0;
		var scoreText;
	},
	create: function() {
		scoreText = this.add.text(16, 16, 'State Manager: Level1', { fontSize: '32px', fill: '#fff' });
	},
	update: function() {

	}
}