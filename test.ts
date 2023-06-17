// tests go here; this will not be compiled when this package is used as an extension.

SuperBit.MotorRun(SuperBit.enMotors.M1, 100)
SuperBit.MotorRun(SuperBit.enMotors.M2, 100)
SuperBit.MotorRun(SuperBit.enMotors.M3, 10)
SuperBit.Music(SuperBit.enMusic.dadadum)

input.onButtonPressed(Button.A, function() {
    basic.showArrow(ArrowNames.North)
    basic.pause(1000)
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, 0, SuperBit.enMotors.M1, 0)
    
})

input.onButtonPressed(Button.B, function() {
    let _pin = 16
    let myStrip = SuperBit.RGB_Program(_pin)
    myStrip.setBrightness(40)
    myStrip.showColor(neopixel.colors(NeoPixelColors.Green))
})

basic.forever(function() {
    basic.showString("1234567888")
    TM1650.clear()
    basic.pause(2000)
    TM1650.showSring("4567")
    basic.pause(3000)
    TM1650.showRunging("doug", 1000)
    basic.pause(2000)
    let p = sonar.ping(DigitalPin.P12, DigitalPin.P13, PingUnit.Centimeters)
    TM1650.showNumber(p)
    basic.pause(2000)
})