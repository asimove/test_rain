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
        led.unplot(1, 0)
        led.unplot(2, 0)
        led.unplot(3, 0)
        led.unplot(0, 1)
        led.unplot(1, 2)
        led.unplot(2, 2)
        led.unplot(3, 2)
        led.unplot(4, 1)
        led.unplot(4, 2)
        led.unplot(4, 3)
        led.unplot(3, 4)
        led.unplot(2, 3)
        led.unplot(1, 4)
        led.unplot(0, 3)
        basic.pause(1000)
        led.plot(0, 0)
        led.plot(1, 0)
        led.plot(2, 0)
        led.unplot(3, 0)
        led.unplot(4, 0)

        //led.unplot(3, 1)
        /*
        led.plot(0, 1)
        led.plot(1, 2)
        
        led.plot(0, 1)
        led.plot(1, 2)

        led.plot(2, 2)
        led.plot(3, 2)
        
        led.plot(4, 2)*/
    }
}
function doSomething (move: boolean) {
    if (move) {
        for (let value of list2) {
            led.toggle(value, 0)
        }
        basic.pause(1000)
        for (let value of list) {
            led.toggle(value, 0)
        }
        basic.pause(1000)
        for (let value of list3) {
            led.toggle(value, 1)
        }
        basic.pause(1000)
        led.toggle(0, 1)
    }
}
let list3: number[] = []
let list2: number[] = []
let list: number[] = []
list = [0, 1, 2, 3]
list2 = [0, 1, 2]
list3 = [0, 4]
basic.forever(function () {
    doSomething(false)
    nuage(true, 10)
})
