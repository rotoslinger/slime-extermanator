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
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. . f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. . f f e e f b f e e f f 
. . . f 4 4 f 1 e 4 e f . 
. . . f 4 4 4 4 e f f f . 
. . . f f e e e e e f . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 6 6 6 f e e f . . 
. . . . f f f f f f . . . 
. . . . . . f f f . . . . 
`)
    for (let index = 0; index < 4; index++) {
        is_facing_left = true
        is_facing_right = false
        is_facing_up = false
        is_facing_down = false
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . f f f f . . . . 
. . f f f f f f f f . . 
. f f f f f f c f f f . 
f f f f f f c c f f f c 
f f f c f f f f f f f c 
c c c f f f e e f f c c 
f f f f f e e f f c c f 
f f f b f e e f b f f f 
. f 4 1 f 4 4 f 1 4 f . 
. f e 4 4 4 4 4 4 e f . 
. f f f e e e e f f f . 
f e f b 7 7 7 7 b f e f 
e 4 f 7 7 7 7 7 7 f 4 e 
e e f 6 6 6 6 6 6 f e e 
. . . f f f f f f . . . 
. . . f f . . f f . . . 
`)
    for (let index = 0; index < 4; index++) {
        is_facing_left = false
        is_facing_right = false
        is_facing_up = false
        is_facing_down = true
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (is_facing_up) {
        projectile = sprites.createProjectileFromSprite(img`
. d . 
. d . 
. d . 
d d d 
. f . 
. f . 
`, mySprite, 0, -100)
    } else if (is_facing_left) {
        projectile = sprites.createProjectileFromSprite(img`
. . . d . . 
d d d d f f 
. . . d . . 
`, mySprite, -100, 0)
    } else if (is_facing_right) {
        projectile = sprites.createProjectileFromSprite(img`
. . d . . . 
f f d d d d 
. . d . . . 
`, mySprite, 100, 0)
    } else if (is_facing_down) {
        projectile = sprites.createProjectileFromSprite(img`
. f . 
. f . 
d d d 
. d . 
. d . 
. d . 
`, mySprite, 0, 100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . f f f f f . . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f . . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f . . . 
. f f f e 4 4 4 4 f . . . 
. . f e e e e e f f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . f e e f 6 6 6 f . . . 
. . . f f f f f f . . . . 
. . . . f f f . . . . . . 
`)
    for (let index = 0; index < 4; index++) {
        is_facing_left = false
        is_facing_right = true
        is_facing_up = false
        is_facing_down = false
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . f f f f . . . . 
. . f f c c c c f f . . 
. f f c c c c c c f f f 
f f c c c c c c c c f f 
f c c c f c c c c c c f 
f c f f f c c c f c c f 
f f f f c c c f c c f f 
f f f f f f f f f f f f 
f f f f f f f f f f f f 
. f f f f f f f f f f . 
. f f f f f f f f f f . 
f e f f f f f f f f e f 
e 4 f 7 7 7 7 7 7 c 4 e 
e e f 6 6 6 6 6 6 f e e 
. . . f f f f f f . . . 
. . . f f . . f f . . . 
`)
    for (let index = 0; index < 4; index++) {
        is_facing_left = false
        is_facing_right = false
        is_facing_up = true
        is_facing_down = false
    }
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let is_facing_down = false
let is_facing_up = false
let is_facing_right = false
let is_facing_left = false
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . f f f f . . . . 
. . f f f f f f f f . . 
. f f f f f f c f f f . 
f f f f f f c c f f f c 
f f f c f f f f f f f c 
c c c f f f e e f f c c 
f f f f f e e f f c c f 
f f f b f e e f b f f f 
. f 4 1 f 4 4 f 1 4 f . 
. f e 4 4 4 4 4 4 e f . 
. f f f e e e e f f f . 
f e f b 7 7 7 7 b f e f 
e 4 f 7 7 7 7 7 7 f 4 e 
e e f 6 6 6 6 6 6 f e e 
. . . f f f f f f . . . 
. . . f f . . f f . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(9)
controller.moveSprite(mySprite)
for (let index = 0; index < 4; index++) {
    is_facing_left = false
    is_facing_right = false
    is_facing_up = false
    is_facing_down = true
}
tiles.setTilemap(tiles.createTilemap(
            hex`19001900080109010901010109010c01090c01020c0c0c090c0c090c02070e0e0e0e0e0e0e0e0e0e0e0e0e0e030e0e0e0e0e0e0e0e030a0e0e0e0e0e0e0e0e0e0e0e0e0e0e030e0e0e0e0e0e0e0e03070e0e0e0e0e0e0e0e0e0e0e0e0e0e0b0e0e0e0e0e0e0e0e03070e0e0e0e0e0e0e0e0e0e0e0e0e0e030e0e0e0e0e0e0e0e0b0a0e0e0e0e0e0e0e0e0e0e0e0e0e0e030e0e0e0e0e0e0e0e03070e0e0e0e0e080909020e0e0e0e0e0e0e0e0e0e0e0e0e0e03070e0e0e0e0e0a14110b0e0e0e0e0e0e0e0e0e0e0e0e0e0e03070e0e0e0e0e0a12130b0e0e0e0e0e0e0e0e0e0e0e0e0e0e03070e0e0e0e0e060d0d040e0e0e0e0e0e0e0e0e0e0e0e0e0e0b0a0e0e0e0e0e0e0e0e0e0e0e0e0e0e0b0e0e0e0e0e0e0e0e03070e0e0e0e0e0e0e0e0e0e0e0e0e0e030e0e0e0e0e0e0e0e03070e0e0e0e0e0e0e0e0e0e0e0e0e0e030e0e0e0e0e0e0e0e030a0e0e0e0e0e0e0e0e0e0e0e0e0e0e0b0e0e0e0e0e0e0e0e0b070e0e0e0e0e0e0e0e0e0e0e0e0e0e030e0e0e0e0e0e0e0e0306050d0505050e0e0e0e05050d0505040e0e0e0e0e0e0e0e03150e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e03150e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0b150e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0809020e0e0e0e030a0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0a170b0e0e0e0e03150e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e060d040e0e0e0e0b150e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e030a0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e03150e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e030616160d1616160d161616160d161616160d160d16160d1604`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 . . . . . . . . 2 
2 . . . . . 2 2 2 2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 2 2 2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 2 2 2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 2 2 2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 . . . . . . . . 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . 2 2 2 . . . . 2 
2 . . . . . . . . . . . . . . . . 2 2 2 . . . . 2 
2 . . . . . . . . . . . . . . . . 2 2 2 . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorLockedEast,sprites.dungeon.doorLockedSouth,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.hazardSpike],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(mySprite)
info.setLife(3)
forever(function () {
    pause(2000)
    mySprite2 = sprites.create(img`
. . . 7 7 7 7 7 7 . . . 
. . . 7 2 7 7 2 7 . . . 
. . . 7 7 7 7 7 7 . . . 
. . . 7 2 7 7 2 7 . . . 
. . . 7 7 2 2 7 7 . . . 
. . . 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 . . . 
7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.darkGroundCenter)
})
