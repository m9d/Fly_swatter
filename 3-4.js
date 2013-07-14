enchant();
var game;
window.onload = function() {
    //ゲームオブジェクトの生成
    game = new Game(320, 320);
    game.fps = 16;    
    //画像の読み込み
    game.preload('ka12.png','hae16.png','G36.png','hati36.png','ti.png','ti2.png');

    //ロード完了時に呼ばれる
    game.onload = function() {}
    game.rootScene.addEventListener('enterframe',function(){
        if(rand(100) <5){
            var x = rand(320);
            var y = rand(320);
            var fly = new Fly(x, y);
        }
    });
    //ゲームの開始
    game.start();
};
var Fly = Class.create(Sprite,{
    initialize:function(x,y){
        enchant.Sprite.call(this,16,16);
        this.image = game.assets['hae16.png'];
        this.x = x;
        this.y = y;
        game.rootScene.addChild(this);
    },
});
function rand(num){
    return Math.floor(Math.random() * num);
}