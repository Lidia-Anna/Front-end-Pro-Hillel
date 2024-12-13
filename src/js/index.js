(() => {
  const getWethers = document.querySelector('#getWeather');
  const printWether = async () => {
    const city = 'LVIV';
    const apiKey = '5d066958a60d315387d9492393935c19';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const blockWether = document.querySelector('#weather');
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
                <div class="item p-2 border"><h2>Weather in Lviv</h2></div>
                <div class="item p-2 border"><strong>Temperature:</strong> ${data.main.temp} °C</div>
                <div class="item p-2 border"><strong>Pressure: </strong> ${data.main.pressure} hPa</div>
                <div class="item p-2 border"><strong>Description:</strong> ${data.weather[0].description}</div>
                <div class="item p-2 border"><strong>Humidity:</strong> ${data.main.humidity} %</div>
                <div class="item p-2 border"><strong>Wind speed:</strong> ${data.wind.speed} м/s</div>
                <div class="item p-2 border"><strong>Wind direction: </strong> ${data.wind.deg} °</div>
                <div class="item p-2 border"><img id="icon" src="http://openweathermap.org/img/w/10d.png" alt="Weather icon"/></div>
            `;
      blockWether.append(wrapper);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  getWethers.addEventListener('click', printWether);
})();
