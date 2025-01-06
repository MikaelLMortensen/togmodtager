radio.setGroup(20); // Sæt radio-gruppe (kanal)
serial.redirectToUSB(); // Videresend data til USB

basic.forever(function () {
    let received = radio.receiveString(); // Modtag data via radio
    if (received) {
        serial.writeLine(received); // Send data til USB
        basic.showIcon(IconNames.Yes); // Vis bekræftelsesikon
        basic.pause(100); // Undgå overbelastning
        basic.clearScreen(); // Fjern ikon
    }
});