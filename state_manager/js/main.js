var Nameless = Nameless || {};

Nameless.game = new Phaser.Game(800, 600, Phaser.AUTO, '');

Nameless.game.state.add('Boot',Nameless.Boot);
Nameless.game.state.add('Preload',Nameless.Preload);
Nameless.game.state.add('Menu',Nameless.Menu);
Nameless.game.state.add('Level1',Nameless.Level1);

Nameless.game.state.start('Boot');