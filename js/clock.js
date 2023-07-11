const clock = document.querySelector("h2#clock");

// 현재 시간,분,초를 표시
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// function을 계속해서 호출하는 법
getClock();
setInterval(getClock, 1000);
