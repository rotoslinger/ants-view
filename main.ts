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
    if (Math.percentChance(50)) {
        scene.setTileMap(sprites.food.smallCake, TileScale.Sixteen)
    } else if (Math.percentChance(50)) {
        scene.setTileMap(sprites.food.bigDrumstick, TileScale.Sixteen)
    } else if (Math.percentChance(50)) {
        scene.setTileMap(sprites.food.bigTaco, TileScale.Sixteen)
    } else if (Math.percentChance(50)) {
        scene.setTileMap(sprites.food.bigHam, TileScale.Sixteen)
    } else {
        scene.setTileMap(sprites.food.smallCherries, TileScale.Sixteen)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.percentChance(50)) {
        scene.setTileMap(sprites.food.bigPizza, TileScale.Sixteen)
    } else if (Math.percentChance(50)) {
        scene.setTileMap(sprites.food.smallApple, TileScale.Sixteen)
    } else if (Math.percentChance(50)) {
        scene.setTileMap(sprites.food.smallStrawberry, TileScale.Sixteen)
    } else if (Math.percentChance(50)) {
        scene.setTileMap(sprites.food.smallLemon, TileScale.Sixteen)
    } else {
        scene.setTileMap(sprites.food.plate, TileScale.Sixteen)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (up) {
        mySprite.image.flipY()
        up = false
        down = true
    }
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
scene.setTileMap(sprites.food.bigPizza, TileScale.Sixteen)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
up = true
down = false
