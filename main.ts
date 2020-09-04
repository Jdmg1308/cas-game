let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f . . . . 
    . . . . . . . . . f . f . . . . 
    . . . . . . . . f . . f . f . . 
    . . . . . . . f . . . f . f . . 
    . . . . . f f . . f f . f . . . 
    . . f f f f f f f f f f . . . . 
    . f f . . f . . f . f . . . . . 
    f . . . . . . . . . f . . . . . 
    . . . . . . . . . f . . . . . . 
    . . . . . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(1)
info.startCountdown(1000)
music.baDing.play()
info.changeScoreBy(1)
