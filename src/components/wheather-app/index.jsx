import search_icon from "../../assets/images/search.png";
import clear_icon from "../../assets/images/clear.png";
import cloud_icon from "../../assets/images/cloud.png";
import drizzle_icon from "../../assets/images/drizzle.png";
import rain_icon from "../../assets/images/rain.png";
import snow_icon_icon from "../../assets/images/snow.png";
import wind_icon from "../../assets/images/wind.png";
import humidity_icon from "../../assets/images/humidity.png";
import earth from "../../assets/images/earth.jpg";
export default function WheatherApp() {
  return (
    <div style={{ backgroundImage: `url(${earth})` }}>
      <div className="py-4 bg-transparent w-[600px] h-[786px] m-auto rounded-xl">
        <div className=" flex items-center justify-center gap-3.5 py-4 pt-12 ">
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
            <img src={cloud_icon} alt="" />
          </div>

          <div className="flex justify-center text-5xl font-bold">24 C</div>
          <div className="flex justify-center text-2xl font-semibold">
            London
          </div>

          <div className="mt-6 flex justify-center  ">
            <div className="m-auto flex items-start gap-3">
              <img src={humidity_icon} className="mt-2" />
              <div className="text-md font-semibold">
                <div> 64%</div>
                <div className="font-normal">Humidity</div>
              </div>
            </div>
            <div className="m-auto flex items-start gap-3">
              <img src={wind_icon} />
              <div className="text-md font-semibold">
                <div>18 km/h</div>
                <div className="font-normal">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
