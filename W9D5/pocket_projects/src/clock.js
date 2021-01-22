import {htmlGenerator} from "./warmup"

class Clock {
    constructor() {
        console.log('clock')
        const time = new Date();
        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
        htmlGenerator(this.printTime(), document.getElementById('clock'));
        setInterval(this._tick.bind(this), 1000);
    }
    


    printTime() {
        const timeJoin = [this.hours, this.minutes, this.seconds].join(":");
        
        return timeJoin;
    }


    _tick() {
        this._incrementSeconds();
        htmlGenerator(clock.printTime(), document.getElementById('clock'));
    }

    _incrementSeconds() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this._incrementMinutes();
        }
    }

    _incrementMinutes() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this._incrementHours();
        }
    }

    _incrementHours() {
        this.hours = (this.hours + 1) % 24;
    }


}

const clock = new Clock();