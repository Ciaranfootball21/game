let score_a = 0
input.onButtonPressed(Button.A, function () {
    score_a += 1
})
input.onButtonPressed(Button.AB, function () {
    score_a = 3
})
input.onButtonPressed(Button.B, function () {
    score_a += 2
})
basic.forever(function () {
    basic.showNumber(score_a)
})
