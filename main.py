def on_left_pressed():
    global selcted_option
    selcted_option += -1
    music.play_melody("B - - - - - - - ", 601)
    screen_refresh()
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    global selcted_option
    selcted_option += 1
    music.play_melody("B - - - - - - - ", 601)
    screen_refresh()
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def screen_refresh():
    global mySprite
    if selcted_option == 1:
        mySprite = sprites.create(assets.image("""
            plus1
        """), SpriteKind.player)
        mySprite.set_scale(1.5, ScaleAnchor.MIDDLE)
    if selcted_option == 0:
        mySprite = sprites.create(assets.image("""
            Welcome Screen
        """), SpriteKind.player)
        mySprite.set_scale(1.5, ScaleAnchor.MIDDLE)
    if selcted_option == -1:
        mySprite = sprites.create(assets.image("""
            minus1
        """), SpriteKind.player)
        mySprite.set_scale(1.5, ScaleAnchor.MIDDLE)
mySprite: Sprite = None
selcted_option = 0
selcted_option = 0
screen_refresh()