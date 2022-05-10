basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -100) {
        basic.showIcon(IconNames.Sad)
        if (input.acceleration(Dimension.Y) > -100) {
            basic.showIcon(IconNames.Happy)
        }
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
