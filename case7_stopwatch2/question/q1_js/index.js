let Timer = {
    isPending: true,
    currentSec: 0,
    currentMin: 0,

    startTimer: function () {
        // q1-1). isPending 이 false 일때만 setTimeout 을 재귀 호출하는 것을 만드세요.
        // 60초가 되면 currentSec 을 0 으로, 분을 하나 증가 시킨다.
        // 매 분초마다 시간을 html 에 적는다

        if (!this.isPending) {
            this.currentSec += 1;
            if (this.currentSec == 60) {
                this.currentSec = 0;
                this.currentMin += 1;
            }
            document.querySelector('#min').innerHTML = ('0' + this.currentMin).slice(-2);
            document.querySelector('#sec').innerHTML = ('0' + this.currentSec).slice(-2);
            setTimeout('Timer.startTimer()', 1000);
        }
    },

    pauseTimer: function () {
        this.isPending = true;
    },

    resetTimer: function () {
        this.isPending = true;
        // q1-2) 화면과 시간을 00 으로 초기화 한다.
    },
};
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#start').addEventListener('click', function () {
        // q1-3) 타이머 시작부분을 만든다.
        if (Timer.isPending) {
            Timer.isPending = false;
            Timer.startTimer();
        }
    });

    document.querySelector('#pause').addEventListener('click', function () {
        Timer.pauseTimer();
    });

    document.querySelector('#reset').addEventListener('click', function () {
        Timer.resetTimer();
    });
});
