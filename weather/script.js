const input = document.querySelector("input");
const btn = document.getElementById("search-btn");
const icon = document.querySelector(".icon");
const city = document.querySelector(".city");
const temperature =document.querySelector(".temperature")
btn.addEventListener("click", function (e) {
  find = input.value;
  getWeather(find);
});

function getWeather(find) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${find}  &APPID=edbcfa89d291254269ba47685456d7c9`
  )
    .then((response) => response.json())
    .then((result) => {
      let icon = result.weather[0].icon;
      icon.innerHTML = `<img src="https://api.openweathermap.org/img/wn/${icon}.png"`;
      const currentCity = result.name;
      const country = result.sys.country;
      city.innerHTML = `${currentCity},${country}`;
      let weatherTemp = result.main.temp;
      weatherTemp = weatherTemp -273;
      const temp =weatherTemp.toFixed(2);
      temperature.innerHTML=`${temp} C`;
    });

  //   let icon = result.weather[0].icon;
  //   icon.innerHTML = `https://api.openweathermap.org/img/wn/${icon}.png`;
}
