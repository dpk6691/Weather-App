import { useState, useEffect } from "react";
import axios from "axios";
import MainLeft from "./components/MainLeft";
import SunRiceSet from "./components/SunRiceSet";
import Wind from "./components/Wind";
import Humidity from "./components/Humidity";
import Tomorrow from "./components/upcoming/Tomorrow";
import LastDay from "./components/upcoming/LastDay";
import DayAfterTomorrow from "./components/upcoming/DayAfterTomorrow";

function App() {
  const [location, setLocation] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setLocation(response.data.city);
        // console.log(response.data.city);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    const getWeather = async () => {
      if (location) {
        try {
          const forecast = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=28&appid=70379d2d86f01d270fe820ad1c9f1c0f&units=metric`
          );
          setForecast(forecast.data);
          console.log(forecast.data);
        } catch (error) {
          console.error("Error fetching weather data:", error.message);
        }
      }
    };

    getWeather();
  }, [location]);

  useEffect(() => {
    const searchCities = async () => {
      if (searchTerm) {
        try {
          const response = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=70379d2d86f01d270fe820ad1c9f1c0f`
          );
          setCities(response.data);
          // console.log(response.data);
        } catch (error) {
          console.error("Error searching cities:", error.message);
        }
      }
    };

    searchCities();
  }, [searchTerm]);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setLocation(city);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="p-4 bg-pink-100 min-h-screen grid md:grid-cols-4 gap-4">
        <div className="grid bg-white">
          <div className="relative">
            <input
              type="text"
              className="w-full shadow-md p-3 focus:outline-0"
              placeholder="Search cities..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <ul className="absolute py-1 w-full bg-pink-100">
              {searchTerm.length > 0 && cities.length > 0 && (
                <ul className="p-3 bg-white">
                  {cities.map((city) => (
                    <li
                      className="cursor-pointer hover:font-semibold"
                      key={city.lat}
                      onClick={() => {
                        handleCityChange(city.name);
                        setSearchTerm(""); // Clear the search term
                      }}
                    >
                      {city.name}, {city.country}
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          </div>
          <MainLeft forecast={forecast} />
        </div>
        <div className="md:col-span-3 py-2">
          <div className="text-center textShadow font-bold text-2xl">
            Today's Highlights
          </div>
          <div className="mt-5 grid md:grid-cols-3 gap-4 place-items-stretch">
            <div className="w-full bg-white">
              <SunRiceSet forecast={forecast} />
            </div>
            <div className="w-full bg-white">
              <Wind forecast={forecast} />
            </div>
            <div className="w-full bg-white">
              <Humidity forecast={forecast} />
            </div>
          </div>
          <div className="text-center textShadow font-bold mt-5 text-2xl">
            Upcoming Highlights
          </div>
          <div className="mt-5 grid md:grid-cols-3 gap-4 place-items-stretch">
            <div className="w-full bg-white">
              <Tomorrow forecast={forecast} />
            </div>
            <div className="w-full bg-white">
              <DayAfterTomorrow forecast={forecast} />
            </div>
            <div className="w-full bg-white">
              <LastDay forecast={forecast} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
