/*Each state is a MENU page or LEVEL of your game*/
/*only needs to be in FIRST STATE*/
/*setup variables*/
      var demo = {};
      var centerX = 1500 / 2; /*sprite size divided by 2*/
      var centerY = 1000 / 2;
      var char;
      var speed = 4;
      /*sets up the state */
      demo.state1 = function (){};
      demo.state1.prototype = {
  preload: function (){                     /*PRELOAD*/
      /* Load Image*/
      game.load.spritesheet('char','assets/spritesheet/char_sheet.png',260,370);
      game.load.image('bg1','assets/backgrounds/bg1.png');
  },
  create: function (){                        /*CREATE*/
      /*INIT PHYSICS SYSTEM*/
        game.physics.startSystem(Phaser.Physics.ARCADE);
        /*state params eg background */
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state1');
        /* add our global button function*/
        addchangestateEventListeners();
        /*Set Game Bounds*/
        game.world.setBounds(0,0,2813,1000)
        /* Set scale mode*/
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        var BG1 = game.add.sprite(0,0,'bg1')
        /*ADD sprite to game */
        char = game.add.sprite(centerX, centerY, 'char');
        /*Center Sprite Origin*/
        char.anchor.setTo(0.5,0.5);
        char.scale.setTo(0.7,0.7);
        game.physics.enable(char);
        char.body.collideWorldBounds = true;
        char.animations.add('walk',[0,1,2,3,4]);

        game.camera.follow(char);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0,600,1000)
},
  update: function (){                          /*UPDATE*/
      if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
          char.scale.setTo(0.7,0.7);
          char.x += speed;
                              /*Name ,framerate,Loop?*/
          char.animations.play('walk',14,true);
    }
      else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
          char.scale.setTo(-0.7,0.7);
          char.x -= speed;
          char.animations.play('walk',14,true);
    }
    else{
          char.animations.stop('walk');
          char.frame =0;
    }
      if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
          char.y -= speed;
          if(char.y < 400){
            adam.y =400;
          }
    }
      else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
          char.y += speed;
    }
  },
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
