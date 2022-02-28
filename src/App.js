import { useState, useEffect } from "react";
import LinksRow from "./components/LinksRow";
import Widget from "./components/Widget";
import GoogleSearch from "./components/GoogleSearch";
import { weather } from "./weather";
import { quote } from "./quote";
import "./App.css";

const App = () => {
  const [weatherWidget, setWeatherWidget] = useState("");
  const [quoteWidget, setQuoteWidget] = useState("");
  const [city, setCity] = useState("");

  let myLocation = localStorage.getItem("User_Location") || "";

  const loadWeatherAPI = () =>
    (async () => setWeatherWidget(await weather(myLocation)))();
  const loadQuoteAPI = () => (async () => setQuoteWidget(await quote()))();

  useEffect(() => {
    loadWeatherAPI();
    loadQuoteAPI();
  }, []);

  const update = (e) => {
    localStorage.setItem("User_Location", e.target.value);
    setCity(localStorage.getItem("User_Location"));
  };

  return (
    <div className="App">
      <LinksRow />
      <GoogleSearch />
      <Widget
        cssClass={"weatherwidget"}
        widgetName={"Weather"}
        widgetValue={[weatherWidget[0], weatherWidget[1]]}
        widgetLink={"Powered by WeatherAPI.com"}
        widgetURL={"https://www.weatherapi.com/"}
      />
      <Widget
        cssClass={"quotewidget"}
        widgetName={"Quote"}
        widgetValue={[quoteWidget[0], quoteWidget[1]]}
        widgetLink={"Quotes are from freeCodeCamp.org"}
        widgetURL={"https://freeCodeCamp.org"}
      />
      <div className="locationForm">
        <input type="text" placeholder="City" onChange={update} value={city} />
        <button onClick={loadWeatherAPI}>Change City</button>
      </div>
    </div>
  );
};

export default App;
