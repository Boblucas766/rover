Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1), Rover.colors(RoverColors.Red))
Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED2), Rover.colors(RoverColors.Green))
Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED3), Rover.colors(RoverColors.Blue))
Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED4), Rover.colors(RoverColors.Yellow))
basic.forever(function () {
    for (let index = 0; index <= 255; index++) {
        Rover.setBrightness(index)
    }
})