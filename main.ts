let projectile: Sprite = null
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
forever(function () {
    if (controller.A.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 4 4 4 . . . . 
            . . . . . . . 4 4 5 5 4 4 . . . 
            . . . . . . 4 5 5 5 5 5 4 4 . . 
            . . . 4 4 4 5 2 2 2 2 5 5 4 . . 
            . . 4 4 4 5 5 5 5 2 2 5 5 4 . . 
            . . . . . . . 4 4 5 5 5 4 . . . 
            . . . . . . . . . 4 4 4 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 60, 0)
        music.baDing.play()
    }
})
