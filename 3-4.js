enchant();
window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.fps = 16;
    
    //画像の読み込み
    game.preload('ka.png','hae16.png','G.png','hati.png','ti.png','ti2.png');

    //ロード完了時に呼ばれる
    game.onload = function() {
        
        //スプライトの生成
        var fly = new Sprite(16, 16);
        fly.image = game.assets['hae16.png'];
        
        game.rootScene.addEventListener('enterframe',function(){
            //ゲームを進行させる
               //ランダムに敵キャラを登場させる
               fly.x = Math.random()*320; 
               fly.y = Math.random()*320;
                                        
        game.rootScene.addChild(fly); 
        });
        fly.onenterframe = function() {
            this.scale(1.01, 1.01);
        }
        
        fly.addEventListener(Event.TOUCH_START, function(e){
            alert("kk")
            game.rootScene.removeChild(fly);
        });
    }
    //ゲームの開始
    game.start();
};