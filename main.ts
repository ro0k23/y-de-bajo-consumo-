let steps = 0
basic.showNumber(steps)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 800) {
        steps += 1
        basic.showNumber(steps)
    }
})
