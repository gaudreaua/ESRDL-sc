radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    receivedNumber,
    90
    )
})
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
