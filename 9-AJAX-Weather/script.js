function getWeather() {
    const cityName = document.getElementById("cityInput").value.trim();
    if (!cityName) {
        alert("Please enter a city name!");
        return;
    }

    // Fetch weather data from local JSON
    fetch("weather.json")
        .then(response => response.json())
        .then(data => {
            const cities = data.cities;
            const cityWeather = cities.find(city => city.name.toLowerCase() === cityName.toLowerCase());

            if (cityWeather) {
                document.getElementById("weatherResult").innerHTML = `
                    <h3>Weather in ${cityWeather.name}</h3>
                    <p><strong>Temperature:</strong> ${cityWeather.temperature}°C</p>
                    <p><strong>Humidity:</strong> ${cityWeather.humidity}%</p>
                    <p><strong>Conditions:</strong> ${cityWeather.conditions}</p>
                `;
            } else {
                document.getElementById("weatherResult").innerHTML = `<p style="color:red;">City not found in database.</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weatherResult").innerHTML = `<p style="color:red;">Error fetching weather data.</p>`;
        });
}