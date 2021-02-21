const weather = document.querySelector(".js-weather");

const API_KEY = "af2e28eaf99ebbf34aa879702d8c3e54";
const COORDS = "coords";

function getWeather(lat, lon) {
  console.log('hi')
  fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&$lon=${lon}&appid=${API_KEY}&units=metric`
  ).then((response) => response.json).then((json) => {
    console.log(json);
    weather.innerText = `${json.main.temp} @ ${json.name}`;
  });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude, longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){
  console.log('위치를 불러올 수 없습니다.');
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function loadCoords(){
  const loadedCords = localStorage.getItem(COORDS);
  if(loadedCords === null){
    askForCoords();
  } else {
    console.log('hjh');
    const parseCoords = JSON.parse(loadCords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init(){
  loadCoords();
}

init();
