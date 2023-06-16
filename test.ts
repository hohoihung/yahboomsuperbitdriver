// tests go here; this will not be compiled when this package is used as an extension.
input.onButtonPressed(Button.A, function() {
    basic.showArrow(ArrowNames.North)
    basic.pause(1000)
})

input.onButtonPressed(Button.B, function() {
    let _pin = 16
    let myStrip = SuperBit.RGB_Program(_pin)
    myStrip.showColor(neopixel.colors(NeoPixelColors.Green))
})

basic.forever(function() {
    basic.showString("1234567888")
    TM1650.clear()
    basic.pause(2000)
    TM1650.showSring("4567")
    basic.pause(3000)
    TM1650.showRunging("doug", 1000)
    basic.pause(5000)
})