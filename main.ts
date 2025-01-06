radio.setGroup(1)
serial.redirectToUSB()

radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumber(receivedNumber)
    basic.showNumber(receivedNumber)
    basic.pause(100)
    basic.clearScreen()
})

radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
})
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.clearScreen()
})

let received = ""
// Videresend data til USB
basic.forever(function () {
    // // Modtag data via radio
    // received = radio.receiveString()
    // if (received) {
    //     // Send data til USB
    //     serial.writeLine(received)
    //     // Vis bekræftelsesikon
    //     basic.showIcon(IconNames.Yes)
    //     // Undgå overbelastning
    //     basic.pause(100)
    //     // Fjern ikon
    //     basic.clearScreen()
    // }
})
