namespace SpriteKind {
    export const hurt_block = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (down) {
        mySprite.image.flipY()
        up = true
        down = false
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setTileMap(sprites.duck.tree, TileScale.Sixteen)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setTileMap(sprites.builtin.forestBat7, TileScale.Sixteen)
})
let down = false
let up = false
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . f f . . . . . . f f . . . . . . . 
. . . . . . . . f f . . . . . . f f . . . . . . . 
. . . . . . . . f f f f f f f f f f . . . . . . . 
. . . . . . . . f f f 1 f f 1 f f f . . . . . . . 
. . . . f . . . . . f 1 f f 1 f . . . . f . . . . 
. . . f f . . . . . f 1 f f 1 f . . . . f f . . . 
. . . f f f . . . . f f f f f f . . . f f f . . . 
. . . . f f f . . . . . f f . . . . f f f . . . . 
. . . . . f f f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . . 
. . . . . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . . . f f . . . . . . . . . . . 
. . . f f f f f f f f f f f f f f f f f f f f . . 
. . . f f f f f f f f f f f f f f f f f f f f . . 
. . . . . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . . f f . . f f f f . . f f . . . . . . 
. . . . . . . f f . f f f f f f . f f . . . . . . 
. . . . . . . f f . f f f f f f . f f . . . . . . 
. . . . . . . f f . f f f f f f . f f . . . . . . 
. . . . . . . f f . f f f f f f . f f . . . . . . 
. . . . . . . f f . f f f f f f . f f . . . . . . 
. . . . . . . f f . f f f f f f . f f . . . . . . 
. . . . . . . f f . . f f f f . . f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.setTileMap(sprites.duck.tree, TileScale.Sixteen)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
up = true
down = false
