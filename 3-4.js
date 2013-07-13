//方向指定
var DIR_LEFT  = 0;
var DIR_RIGHT = 1;
var DIR_UP    = 2;
var DIR_DOWN  = 3;

enchant();
window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.fps = 16;
    
    //画像の読み込み
    game.preload('C:\Users\higurashi\Documents\GitHub\ka', 'C:\Users\higurashi\Documents\GitHub\hae','C:\Users\higurashi\Documents\GitHub\G','C:\Users\higurashi\Documents\GitHub\hati','C:\Users\higurashi\Documents\GitHub\ti1','C:\Users\higurashi\Documents\GitHub\ti2');
    
    //ロード完了時に呼ばれる
    game.onload = function() {
        //スプライトの生成
        var fly = new Sprite(16, 16);
        fly.image = game.assets['C:\Users\higurashi\Documents\GitHub\hae'];
        fly.x = 160 - 16;
        fly.y = 160 - 16;
        game.rootScene.addChild(fly);
        
        //スプライトの定期処理
        //fly.tl.rotateTo(60, 2,)
            
            
            
        };
    
    //ゲームの開始
    game.start();
};