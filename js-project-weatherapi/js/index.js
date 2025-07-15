const apiKey = "0adb5c172a246f2eea219c46e407251c";

    function getWeather() {
      const city = document.getElementById("cityInput").value.trim();
      if (!city) return alert("Please enter a city name.");

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then(res => res.json())
        .then(data => {
          if (data.cod !== 200) {
            alert("City not found!");
            return;
          }
          document.getElementById("cityInput").value = "";
          document.getElementById("weatherResult").style.display = "block";
          document.getElementById("weatherCity").textContent = data.name + ', ' + data.sys.country;
          document.getElementById("temp").textContent = data.main.temp;
          document.getElementById("description").textContent = data.weather[0].description;
          document.getElementById("humidity").textContent = data.main.humidity;
          document.getElementById("wind").textContent = (data.wind.speed * 3.6).toFixed(1); // m/s to km/h
          document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch(() => {
          alert("Error fetching data.");
        });
    }