enchant();

window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.fps = 16;    
    //画像の読み込み
    game.preload('hae16.png', 'ti.png');
    game.tick = 0;
	var time = 32;
	var time2 = 720;
    
	var rand = function(num){
        return Math.floor(Math.random() * num);
    }
	
    var Fly = Class.create(Sprite,{ // Spriteクラスを継承
			initialize:function(x,y){ //初期化する
            Sprite.call(this,16,16); //Spriteオブジェクトを初期化
            this.image = game.assets['hae16.png'];
            this.x = x;
            this.y = y;
            this.addEventListener(Event.TOUGH_START,function(){
                game.rootScene.removeChild(this);
            });
            game.rootScene.addChild(this);
        }
    });
	//ロード完了時に呼ばれる
    game.onload = function(){
		game.rootScene.addEventListener(Event.TOUCH_START,function(e){
            console.log(e.x);
			new Fly(e.x,e.y);
		});
    };
    //ゲームの開始
    game.start();
};