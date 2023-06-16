// tests go here; this will not be compiled when this package is used as an extension.
input.onButtonPressed(Button.A, function() {
    basic.showArrow(ArrowNames.North)
    basic.pause(1000)
})

input.onButtonPressed(Button.B, function() {
    let _pin = 16
    let myStrip = SuperBit.RGB_Program(_pin)
    myStrip.showColor(neopixel.colors(NeoPixelColors.Red))
})

basic.forever(function() {
    TM1650.showSring("1234")
    basic.pause(3000)
    TM1650.showRunging("abcde", 1000)
    basic.pause(5000)
})