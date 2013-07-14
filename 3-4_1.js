enchant();

window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.fps = 16;    
    //画像の読み込み
    game.preload('hae16.png','ti.png');
    game.tick = 0;
    var time = 32;
    
	var rand = function(num){
        return Math.floor(Math.random() * num);
    }
	
    var Fly = Class.create(Sprite,{
        initialize:function(x,y){ //初期化する
            Sprite.call(this,16,16); //Spriteオブジェクトを初期化
            this.image = game.assets['hae16.png'];
            this.x = x;
            this.y = y;
            this.addEventListener(Event.TOUCH_START,function(e){
                new Effect(e.x - 18, e.y- 18);
                game.rootScene.removeChild(this);
            });
            game.rootScene.addChild(this);
        }
        });
    
    var Effect = Class.create(Sprite,{
        initialize:function(x,y){
            Sprite.call(this,36,36);
            this.image = game.assets['ti.png'];
                this.x = x;
                this.y = y;
                game.rootScene.addChild(this);
        }
    });
    
    //ロード完了時に呼ばれる
    game.onload = function(){
        game.addEventListener(Event.ENTER_FRAME,function(){
        game.tick++;
        if(game.tick % time == 0){
            var fly = new Fly(rand(200),rand(200));
            time -= 0.5;
        } else if(game.tick % 32 == 0){
            var fly = new Fly(rand(200),rand(200));
        }
       
    });
    }
    //ゲームの開始
    game.start();
}