/*  load game canvase size (w,h,render-er(canvas))   */
var game = new Phaser.Game(600,400,Phaser.AUTO);
/*Add gamestate */
game.state.add('state1', demo.state1);
game.state.start('state1');
