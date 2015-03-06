BasicGame.Preload = function(){};

BasicGame.Preload.prototype = {
	preload: function() {
		this.loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loadingBar');
		this.loadingBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.loadingBar);

		this.startMainMenu = function() {
			this.state.start('Menu')
		}

		//assets for menu
		this.load.image('menuBackground', 'http://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg');
	},
	create: function() {
		var tween = this.add.tween(this.loadingBar)
		  .to({
		    alpha: 0
		  }, 1000, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(this.startMainMenu, this);

		

	},
	update: function() {

	}
}