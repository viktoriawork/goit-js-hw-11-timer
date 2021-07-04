class CountdownTimer {
    constructor({ selector, targetDate }) {
        const container = document.querySelector(selector);
        this.date = targetDate;
        this.days = container.querySelector('[data-value="days"]');
        this.hours = container.querySelector('[data-value="hours"]');
        this.minutes = container.querySelector('[data-value="mins"]');
        this.seconds = container.querySelector('[data-value="secs"]');
        this.updateTimer();
        this.startTimer();
    };

    startTimer() {
        setInterval(() => {
            this.updateTimer()
        }, 1000);
    };

    updateTimer() {
        const nowDate = new Date().getTime();
        let time = this.date - nowDate;
        const { days, hours, mins, secs } = this.getTimerComponents(time);
        this.showDate(days, hours, mins, secs);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    };

    getTimerComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs }
    };

    showDate(days, hours, mins, secs) {
        this.days.textContent = days;
        this.hours.textContent = hours;
        this.minutes.textContent = mins;
        this.seconds.textContent = secs;
    }

};

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 25, 2021 10:00:00'),
});












