const API_KEY = "33cdaaf5541c10b8515fc3c10c8df1f3";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url) //url 변수를 불러옴
    .then((response) => response.json()) // url 변수에 있는 정보를 json에 넣음
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//getCurrentPosition 인수 2가지 (모든게 잘 됐을 때 함수, 에러가 발생했을 때 실행할 함수)
