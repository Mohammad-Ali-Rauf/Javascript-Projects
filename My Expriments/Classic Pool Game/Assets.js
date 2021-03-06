let sprites = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback){
    if(assetsStillLoading){
        requestAnimationFrame(assetsStillLoadingLoop.bind(this, callback));
    } else {
        callback();
    }
}

function loadAssets(callback) {

    function loadSprite(fileName){
        assetsStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/sprites/" + fileName;

        spriteImage.onload = function() {
            assetsStillLoading--;
        }

        return spriteImage;
    }
    sprites.background = loadSprite('spr_background.png');
    sprites.stick = loadSprite('spr_stick.png');

    assetsLoadingLoop(callback);


}