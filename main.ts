function nuage (pluie: boolean, power: number) {
    if (pluie) {
        led.plot(1, 0)
        led.plot(2, 0)
        led.plot(3, 0)
        led.plot(0, 1)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 1)
        led.plot(4, 2)
        for (let index = 0; index < power; index++) {
            // Rain
            led.toggle(4, 3)
            basic.pause(80)
            led.toggle(4, 3)
            basic.pause(80)
            led.toggle(3, 4)
            basic.pause(100)
            led.toggle(3, 4)
            basic.pause(100)
            led.toggle(2, 3)
            basic.pause(120)
            led.toggle(2, 3)
            basic.pause(120)
            led.toggle(1, 4)
            basic.pause(100)
            led.toggle(1, 4)
            basic.pause(90)
            led.toggle(0, 3)
            basic.pause(70)
            led.toggle(0, 3)
        }
        basic.clearScreen()
        basic.pause(1600)
    }
}
basic.forever(function () {
    basic.showNumber(envirobit.getTemperature())
    nuage(true, 10)
})
