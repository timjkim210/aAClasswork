import {htmlGenerator} from "./warmup"

class Clock {
    constructor() {
        const time = new Date();
        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
    }
    htmlGenerator(this.printTime(), clockElement)
    printTime() {
        const timeJoin = [this.hours, this.minutes, this.seconds].join(":");
    }

}