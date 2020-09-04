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
scene.setBackgroundColor(1)
controller.moveSprite(mySprite)
info.startCountdown(10)
music.baDing.play()
