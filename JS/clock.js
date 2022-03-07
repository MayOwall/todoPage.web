const clock = document.getElementById("clock");

function clockPainter() {
    const nowDate = new Date();
    const nowHours = String(nowDate.getHours()).padStart(2, '0');
    const nowMinutes = String(nowDate.getMinutes()).padStart(2, '0');
    const nowSeconds = String(nowDate.getSeconds()).padStart(2, '0');

    clock.querySelector("h2:first-of-type").innerText = nowHours;
    clock.querySelector("h2:last-of-type").innerText = nowMinutes;
};

function timerPainter() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const tomorrow = new Date(year, month, date + 1);
    //남은 시간 계산기
    const leftTime = (tomorrow.getTime() - today.getTime()) / 1000;

    //남은 시간의 hour 계산기
    const leftTimeHour = Math.floor(leftTime / 3600);

    //남은 시간의 minute 계산기
    const leftTimeMinute = Math.floor((leftTime - (3600 * leftTimeHour)) / 60);

    //남은 시간의 second 계산기
    const leftTimeSecond = (Math.floor((leftTime - (leftTimeHour * 3600) - (leftTimeMinute * 60))));
    
    const timer = document.querySelector("#timer");
    timer.innerText = `${String(leftTimeHour).padStart(2, '0')} : ${String(leftTimeMinute).padStart(2, '0')} : ${String(leftTimeSecond + 1).padStart(2, '0')}`;
};

clockPainter();
setInterval(clockPainter, 1000);
timerPainter();
setInterval(timerPainter, 1000);