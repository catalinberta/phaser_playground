var Nameless = Nameless || {};
Nameless.Boot = function(){};

Nameless.Boot.prototype = {
	preload: function() {
		this.load.image('loadingBar', 'img/loadbar.png');
	},
	create: function() {
		this.input.maxPointers = 1;
    	this.stage.disableVisibilityChange = true;
		this.state.start('Preload');
	},
	update: function() {

	}
}