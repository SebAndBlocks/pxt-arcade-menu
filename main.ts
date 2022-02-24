controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    selcted_option += -1
    music.playMelody("B - - - - - - - ", 601)
    screen_refresh()
    console.log("button.left")
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    selcted_option += 1
    music.playMelody("B - - - - - - - ", 601)
    screen_refresh()
    console.log("button.right")
})
function screen_refresh () {
    if (selcted_option == 1) {
        mySprite = sprites.create(assets.image`Welcome Screen1`, SpriteKind.Player)
        mySprite.setScale(1.5, ScaleAnchor.Middle)
    }
    if (selcted_option == 0) {
        mySprite = sprites.create(assets.image`Welcome Screen0`, SpriteKind.Player)
        mySprite.setScale(1.5, ScaleAnchor.Middle)
    }
    if (selcted_option == -1) {
        mySprite = sprites.create(assets.image`Welcome Screen`, SpriteKind.Player)
        mySprite.setScale(1.5, ScaleAnchor.Middle)
    }
    if (selcted_option < -1) {
        selcted_option = -1
    }
    if (selcted_option > 1) {
        selcted_option = -1
    }
    console.log("completed_screen_refresh")
}
let mySprite: Sprite = null
let selcted_option = 0
selcted_option = 0
screen_refresh()
