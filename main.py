sonar = 0

def on_forever():
    global sonar
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS)
    if sonar <= 6:
        cuteBot.stopcar()
        cuteBot.motors(0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L,
            randint(0, 255),
            randint(0, 255),
            randint(0, 255))
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R,
            randint(0, 255),
            randint(0, 255),
            randint(0, 255))
        basic.pause(200)
        images.icon_image(IconNames.ANGRY).show_image(0)
        cuteBot.motors(-50, 0)
    elif cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
        cuteBot.closeheadlights()
        cuteBot.stopcar()
    else:
        images.icon_image(IconNames.GHOST).show_image(0)
        cuteBot.motors(40, 40)
basic.forever(on_forever)
