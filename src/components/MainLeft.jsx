import React from "react";

const MainLeft = ({ forecast }) => {
  return (
    <div className="text-center">
      {forecast && (
        <>
          <img
            className="m-auto"
            src={`https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@4x.png`}
            alt=""
          />

          <div className="text-6xl">
            <span className="font-bold">
              {Math.floor(forecast.list[1].main.temp)}
            </span>
            <sup className="text-slate-400">°c</sup>
          </div>
          <h1 className="text-2xl">
            {forecast.city.name}, {forecast.city.country}
          </h1>

          <div className="m-auto mt-4 mb-6 flex justify-center items-center">
            <img
              src={`https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}.png`}
              alt=""
            />
            <p>{forecast.list[0].weather[0].main}</p>
          </div>

          <div className=" m-auto my-5 max-w-56 grid grid-cols-2 gap-3 place-items-center">
            <div>
              <span className="font-semibold text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 30 30"
                  className="w-16 h-16 md:w-8 md:h-8 m-auto fill-blue-600"
                  xmlSpace="preserve"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M3.89,17.6c0-0.99,0.31-1.88,0.93-2.65s1.41-1.27,2.38-1.49c0.26-1.17,0.85-2.14,1.78-2.88c0.93-0.75,2-1.12,3.22-1.12  c1.18,0,2.24,0.36,3.16,1.09c0.93,0.73,1.53,1.66,1.8,2.8h0.27c1.18,0,2.18,0.41,3.01,1.24s1.25,1.83,1.25,3  c0,1.18-0.42,2.18-1.25,3.01s-1.83,1.25-3.01,1.25H8.16c-0.58,0-1.13-0.11-1.65-0.34S5.52,21,5.14,20.62  c-0.38-0.38-0.68-0.84-0.91-1.36S3.89,18.17,3.89,17.6z M5.34,17.6c0,0.76,0.28,1.42,0.82,1.96s1.21,0.82,1.99,0.82h9.28  c0.77,0,1.44-0.27,1.99-0.82c0.55-0.55,0.83-1.2,0.83-1.96c0-0.76-0.27-1.42-0.83-1.96c-0.55-0.54-1.21-0.82-1.99-0.82h-1.39  c-0.1,0-0.15-0.05-0.15-0.15l-0.07-0.49c-0.1-0.94-0.5-1.73-1.19-2.35s-1.51-0.93-2.45-0.93c-0.94,0-1.76,0.31-2.46,0.94  c-0.7,0.62-1.09,1.41-1.18,2.34l-0.07,0.42c0,0.1-0.05,0.15-0.16,0.15l-0.45,0.07c-0.72,0.06-1.32,0.36-1.81,0.89  C5.59,16.24,5.34,16.87,5.34,17.6z M14.19,8.88c-0.1,0.09-0.08,0.16,0.07,0.21c0.43,0.19,0.79,0.37,1.08,0.55  c0.11,0.03,0.19,0.02,0.22-0.03c0.61-0.57,1.31-0.86,2.12-0.86c0.81,0,1.5,0.27,2.1,0.81c0.59,0.54,0.92,1.21,0.99,2l0.09,0.64h1.42  c0.65,0,1.21,0.23,1.68,0.7c0.47,0.47,0.7,1.02,0.7,1.66c0,0.6-0.21,1.12-0.62,1.57s-0.92,0.7-1.53,0.77c-0.1,0-0.15,0.05-0.15,0.16  v1.13c0,0.11,0.05,0.16,0.15,0.16c1.01-0.06,1.86-0.46,2.55-1.19s1.04-1.6,1.04-2.6c0-1.06-0.37-1.96-1.12-2.7  c-0.75-0.75-1.65-1.12-2.7-1.12h-0.15c-0.26-1-0.81-1.82-1.65-2.47c-0.83-0.65-1.77-0.97-2.8-0.97C16.28,7.29,15.11,7.82,14.19,8.88  z"
                  />
                </svg>{" "}
                Cloudiness
              </span>
              <p className="w-full text-center">
                {forecast.list[0].clouds.all}%
              </p>
            </div>
            <div>
              <span className="font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 1024 1024"
                  className="w-16 h-16 md:w-8 md:h-8 m-auto fill-purple-600"
                  xmlSpace="preserve"
                >
                  <path d="M503.92 182.74c39.7 0 77.07 14.95 105.14 42.25 28.17 27.2 43.6 63.42 43.6 101.88 0 38.46-15.43 74.68-43.6 101.88-28.08 27.3-65.45 42.25-105.14 42.25-39.7 0-77.07-14.95-105.14-42.25-28.08-27.29-43.61-63.42-43.61-101.88 0-38.46 15.43-74.68 43.61-101.88 28.17-27.21 65.45-42.25 105.14-42.25m0-57.65c-114.99 0-208.24 90.35-208.24 201.78s93.25 201.78 208.24 201.78c115 0 208.25-90.35 208.25-201.78s-93.25-201.78-208.25-201.78z m0 0" />
                  <path d="M266.68 902.48c-0.55-9.28-0.74-18.55-0.74-27.92 0-48.83 6.97-96.03 20.82-140.44 13.11-41.97 31.7-79.54 55.22-111.43 44.72-60.63 102.26-94.05 161.94-94.05 59.69 0 117.23 33.42 161.95 94.05 23.52 31.88 42.11 69.45 55.22 111.43 13.85 44.41 20.82 91.61 20.82 140.44 0 9.37-0.28 18.64-0.74 27.92h59.59c0.46-9.19 0.74-18.55 0.74-27.92C801.5 651.7 668.28 471 504.01 471S206.43 651.7 206.43 874.56c0 9.37 0.28 18.73 0.74 27.92h59.51z m98.35-425.27c-9.67-8.38-18.5-17.56-26.4-27.57-13.57 25.49-41.09 42.97-72.7 42.97-45.09 0-81.81-35.58-81.81-79.27s36.72-79.27 81.81-79.27c10.69 0 20.82 1.98 30.21 5.58-0.28-4.23-0.47-8.47-0.47-12.79 0-8.37 0.56-16.67 1.58-24.77a123.34 123.34 0 0 0-31.33-4.05c-65.73 0-119 51.61-119 115.3 0 40 21.01 75.22 52.9 95.93-65.81 34.6-112.38 119.37-112.38 218.45h37.19c0-28.11 4.19-55.31 12.37-80.8 7.72-24.14 18.78-45.76 32.72-64.05 26.5-34.95 60.7-54.23 96.22-54.23 21.66 0 42.76 7.12 61.91 20.54 8.92-8.92 18.22-17.12 27.89-24.68-7.62-5.85-15.52-10.99-23.8-15.31a115.927 115.927 0 0 0 33.09-31.98z m0 0" />
                  <path d="M675.82 509.28c-8.28 4.32-16.18 9.46-23.8 15.32 9.67 7.57 18.96 15.76 27.89 24.68 19.24-13.51 40.35-20.63 62.01-20.63 35.52 0 69.72 19.28 96.22 54.14 13.94 18.38 24.92 39.91 32.72 64.05 8.18 25.49 12.37 52.7 12.37 80.8h37.19c0-99.09-46.58-183.86-112.4-218.44 31.89-20.72 52.9-55.94 52.9-95.93 0-63.69-53.27-115.31-119-115.31-10.88 0-21.29 1.44-31.33 4.05 1.03 8.11 1.59 16.39 1.59 24.77 0 4.32-0.19 8.56-0.47 12.79 9.3-3.6 19.52-5.58 30.21-5.58 45.09 0 81.81 35.58 81.81 79.27s-36.72 79.27-81.81 79.27c-31.61 0-59.12-17.47-72.7-42.97-7.9 10-16.74 19.19-26.4 27.57 8.74 12.78 19.98 23.68 33 32.15z m0 0" />
                </svg>{" "}
                Polulation
              </span>
              <p className="w-full text-center">
                {forecast.city.population.toLocaleString()}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainLeft;
