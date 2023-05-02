let soinu_limitea = 125
basic.forever(function () {
    if (soinu_limitea < input.soundLevel()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
    basic.pause(100)
})
