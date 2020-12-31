input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . # . #
        # # # # #
        `)
    for (let index = 0; index < 4; index++) {
        SuperBit.Servo3(SuperBit.enServo.S1, SuperBit.enPos.reverse, 37)
        basic.pause(1000)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -53,
        SuperBit.enMotors.M3,
        -53
        )
        basic.pause(1000)
        SuperBit.Servo3(SuperBit.enServo.S1, SuperBit.enPos.forward, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorStopAll()
})
