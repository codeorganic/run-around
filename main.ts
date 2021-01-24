let sonar = 0
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar <= 6) {
        cuteBot.stopcar()
        cuteBot.motors(0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, randint(0, 255), randint(0, 255), randint(0, 255))
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, randint(0, 255), randint(0, 255), randint(0, 255))
        basic.pause(200)
        images.iconImage(IconNames.Angry).showImage(0)
        cuteBot.motors(-50, 0)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        soundExpression.mysterious.play()
        cuteBot.closeheadlights()
        cuteBot.stopcar()
    } else {
        music.setBuiltInSpeakerEnabled(false)
        images.iconImage(IconNames.Ghost).showImage(0)
        cuteBot.motors(40, 40)
    }
})
