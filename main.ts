function faireQuelqueChose (_10: number) {
    basic.showString("Hello!")
}
function A () {
    magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Blue, ColorEffect.Rotate)
    magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Black, ColorEffect.None)
}
function A2 () {
    magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Violet, ColorEffect.Rotate)
    magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Green, ColorEffect.None)
}
OLED.init(128, 64)
OLED.writeNumNewLine(2)
OLED.drawLine(
0,
0,
128,
64
)
OLED.drawLine(
0,
64,
128,
0
)
basic.forever(function () {
    if (magicbit.Ultrasonic(DigitalPin.P2) == 7) {
        OLED.clear()
        magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Indigo, ColorEffect.Flash)
        OLED.drawLoading(Math.constrain(magicbit.Ultrasonic(DigitalPin.P2), 0, 100))
    } else if (magicbit.Ultrasonic(DigitalPin.P2) == 20) {
        OLED.clear()
        magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Red, ColorEffect.Rotate)
        OLED.drawLoading(Math.constrain(magicbit.Ultrasonic(DigitalPin.P2), 0, 100))
    } else {
    	
    }
})
