/*Each state is a MENU page or LEVEL of your game*/
/*only needs to be in FIRST STATE*/
var demo = {};
/*sets up the state */
demo.state1 = function (){};
demo.state1.prototype = {
  preload: function (){},
  create: function (){
    /*state params eg background */
    game.stage.backgroundColor = '#DDDDDD';
    console.log('state1');
/* add our global button function*/
  addchangestateEventListeners();
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
},
  update: function (){},
};


/*Declare Function, once declared it doesnt need to be replicated in each state*/
function changestate(i ,stateNum){

  game.state.start('state' + stateNum);
}
/**/
function addKeyCallback(key, fn, args){
  game.input.keyboard.addKey(key).onDown.add(fn,null,null,args);
}
/*Global button INPUTS*/
function addchangestateEventListeners(){
  /*  add inputs on the GAMESTATE stays locals*/
                            /* pick what key  */       /*name function,NUL,NULl, add variable*/
addKeyCallback(Phaser.Keyboard.ONE,changestate,1);
addKeyCallback(Phaser.Keyboard.TWO,changestate,2);
}
