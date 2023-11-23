import search_icon from "../../assets/images/search.png";
import clear_icon from "../../assets/images/clear.png";
import cloud_icon from "../../assets/images/cloud.png";
import drizzle_icon from "../../assets/images/drizzle.png";
import rain_icon from "../../assets/images/rain.png";
import snow_icon_icon from "../../assets/images/snow.png";
import wind_icon from "../../assets/images/wind.png";
import humidity_icon from "../../assets/images/humidity.png";
import earth from "../../assets/images/earth.jpg";
import { useState } from "react";
export default function WheatherApp() {
  let api_key = "#";

  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("search");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind_speed");
    const temp = document.getElementById("wheather-temp");
    const location = document.getElementById("location");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.main.wind_speed + "km/h";
    temp[0].innerHTML = data.main.wheather - temp + "°C";
    location[0].innerHTML = data.main.location;

    if (data.wheather[0].icon === "01d" || data.wheather[0].icon === "01n") {
      setWicon(clear_icon);
    } else if (
      data.wheather[0].icon === "02d" ||
      data.wheather[0].icon === "02n"
    ) {
      setWicon(cloud_icon);
    } else if (
      data.wheather[0].icon === "03d" ||
      data.wheather[0].icon === "03n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.wheather[0].icon === "04d" ||
      data.wheather[0].icon === "04n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.wheather[0].icon === "09d" ||
      data.wheather[0].icon === "09n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.wheather[0].icon === "10d" ||
      data.wheather[0].icon === "10n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.wheather[0].icon === "13d" ||
      data.wheather[0].icon === "13n"
    ) {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };
  return (
    <div style={{ backgroundImage: `url(${earth})` }}>
      <div className="py-4 bg-transparent w-[600px] h-[1080px] m-auto rounded-xl">
        <div className="search flex items-center justify-center gap-3.5 py-4 pt-12  ">
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="flex pl-10 text-lg w-[362px] h-[78px] bg-[#ebfffc] border-none rounded-full outline-none shadow-sm "
          />
          <div
            onClick={() => {
              search();
            }}
            className="flex justify-center items-center w-[78px] h-[78px] bg-[#ebfffc] rounded-full cursor-pointer"
          >
            <img src={search_icon} alt="" className=" " />
          </div>
        </div>
        {/* Wheather */}
        <div className="text-white justify-center mt-6 ">
          <div className="flex justify-center">
            <img src={wicon} alt="" />
          </div>

          <div
            id="wheather-temp"
            className="flex justify-center text-5xl font-bold"
          >
            24°C
          </div>
          <div
            id="location"
            className="flex justify-center text-2xl font-semibold"
          >
            London
          </div>

          <div className="mt-6 flex justify-center  ">
            <div className="m-auto flex items-start gap-3">
              <img src={humidity_icon} className="mt-2" />
              <div className="text-md font-semibold">
                <div id="humidity"> 64%</div>
                <div className="font-normal">Humidity</div>
              </div>
            </div>
            <div className="m-auto flex items-start gap-3">
              <img src={wind_icon} />
              <div className="text-md font-semibold">
                <div id="wind_speed">18 km/h</div>
                <div className="font-normal">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
