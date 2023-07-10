const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// padStart()는 string에 쓸 수 있는 function이다
// padStart(문자열의 갯수, 만약 길이가 안되면 앞에 채울 string )
// padEnd(문자열의 갯수, 만약 길이가 안되면 뒤에 채울 string )
// number => string으로 전환 시 string(number value);
