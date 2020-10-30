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
basic.forever(function () {
    if (magicbit.Ultrasonic(DigitalPin.P2) == 7) {
        magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Indigo, ColorEffect.Flash)
    }
    if (magicbit.Ultrasonic(DigitalPin.P2) == 20) {
        magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Red, ColorEffect.Rotate)
    }
})
