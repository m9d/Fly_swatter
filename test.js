enchant();
window.onload = function() {
    //ゲームオブジェクトの作成
    var game = new Game(320, 320);
    game.onload = function() {
        //
    };
    game.start();
}