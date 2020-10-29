basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (magicbit.Ultrasonic(DigitalPin.P2) < 10) {
        magicbit.RUS_04(RgbUltrasonics.All, RgbColors.Red, ColorEffect.Flash)
    }
})
