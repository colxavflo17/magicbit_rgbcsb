function A () {
    magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Blue, ColorEffect.Rotate)
    magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Red, ColorEffect.None)
}
function A2 () {
    magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Violet, ColorEffect.Rotate)
    magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Green, ColorEffect.None)
}
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (magicbit.Ultrasonic(DigitalPin.P2) < 10) {
        A2()
        A()
    } else {
    	
    }
})
