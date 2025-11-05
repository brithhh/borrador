basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P1) >= 4 && Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_mm, DigitalPin.P0) <= 8) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 30)
        basic.pause(3000)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 90)
        basic.pause(1000)
    } else {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 90)
    }
})
