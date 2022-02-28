const apikey = "423eca04159148caa5a214643222702";

export const weather = async (location) => {
  if (localStorage.getItem("User_Location") == null) {
    localStorage.removeItem("User_Location");
  }

  const api_url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`;
  const response = await fetch(api_url);

  if (response.status !== 200) {
    console.log(`Failed to fetch weather data for %c${location}`, "color: red");
    console.log(
      "If your city can not be found in the API, try setting your location to a nearby city instead."
    );
    return ["Data unavailable for this location"];
  } else {
    const data = await response.json();
    const city = `${data.location.name}, ${
      data.location.region || data.location.country
    }`;
    const temp = `${data.current.temp_c}°C / ${data.current.temp_f}°F`;
    return [city, temp] || ["Loading...", "Loading..."];
  }
};
