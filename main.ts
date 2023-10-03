controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(George)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Marlon)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Bubba)
})
let Marlon: Sprite = null
let Bubba: Sprite = null
let George: Sprite = null
George = sprites.create(assets.image`George`, SpriteKind.Player)
George.setPosition(18, 22)
George.setStayInScreen(true)
let Charazard = sprites.create(img`
    ........................
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb55555bcc555555c
    ......cb555555555c55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb1bbbc.
    ....ccd55ddddd55bbb335c.
    ...ccbddddddddd5bb3335c.
    .ccccdddddddddd55b3335c.
    cdcccdddddb55bbd553335c.
    cddbddddddb555bb55555c..
    cddddddddddb5555bbccc...
    ccddddddbd55bb55cbc.....
    .ccddddbbbdd55ccbdc.....
    ...ccbbbcbddddccdddc....
    .....ccccdd555dccccc....
    ........cccccccc........
    `, SpriteKind.Player)
Charazard.setPosition(128, 91)
Charazard.setStayInScreen(true)
Charazard.follow(George, 20)
Bubba = sprites.create(assets.image`Bubba`, SpriteKind.Projectile)
Bubba.setPosition(104, 13)
Bubba.setVelocity(29, 79)
Bubba.setStayInScreen(true)
Marlon = sprites.create(assets.image`Marlon`, SpriteKind.Food)
Marlon.setPosition(25, 87)
Marlon.setStayInScreen(true)
let Magic_Ball = sprites.create(assets.image`Magic ball`, SpriteKind.Projectile)
Magic_Ball.setVelocity(37, 31)
Magic_Ball.setBounceOnWall(true)
