import React from "react";

const Wind = ({ forecast }) => {
  if (!forecast || !forecast.city) {
    return <div className="p-3 text-center">No forecast available</div>;
  }
  return (
    <div className=" m-auto p-4 grid grid-cols-2 gap-3 place-items-center">
      <span className="font-semibold text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 30 30"
          className="w-28 h-28 md:w-14 md:h-14 m-auto fill-green-600"
          xmlSpace="preserve"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M3.1,16.97c0,0.24,0.09,0.45,0.28,0.62c0.16,0.19,0.37,0.28,0.63,0.28H18.7c0.29,0,0.53,0.1,0.73,0.3  c0.2,0.2,0.3,0.45,0.3,0.74c0,0.29-0.1,0.53-0.3,0.72c-0.2,0.19-0.44,0.29-0.74,0.29c-0.29,0-0.54-0.1-0.73-0.29  c-0.16-0.18-0.36-0.26-0.6-0.26c-0.25,0-0.46,0.09-0.64,0.26s-0.27,0.38-0.27,0.61c0,0.25,0.09,0.46,0.28,0.63  c0.56,0.55,1.22,0.83,1.96,0.83c0.78,0,1.45-0.27,2.01-0.81c0.56-0.54,0.83-1.19,0.83-1.97s-0.28-1.44-0.84-2  c-0.56-0.56-1.23-0.84-2-0.84H4.01c-0.25,0-0.46,0.09-0.64,0.26C3.19,16.51,3.1,16.72,3.1,16.97z M3.1,13.69  c0,0.23,0.09,0.43,0.28,0.61c0.17,0.18,0.38,0.26,0.63,0.26h20.04c0.78,0,1.45-0.27,2.01-0.82c0.56-0.54,0.84-1.2,0.84-1.97  c0-0.77-0.28-1.44-0.84-1.99s-1.23-0.83-2.01-0.83c-0.77,0-1.42,0.27-1.95,0.8c-0.18,0.16-0.27,0.38-0.27,0.67  c0,0.26,0.09,0.47,0.26,0.63c0.17,0.16,0.38,0.24,0.63,0.24c0.24,0,0.45-0.08,0.63-0.24c0.19-0.21,0.42-0.31,0.7-0.31  c0.29,0,0.53,0.1,0.73,0.3c0.2,0.2,0.3,0.44,0.3,0.73c0,0.29-0.1,0.53-0.3,0.72c-0.2,0.19-0.44,0.29-0.73,0.29H4.01  c-0.25,0-0.46,0.09-0.64,0.26C3.19,13.23,3.1,13.44,3.1,13.69z M4.67,20.61c0,0.24,0.08,0.43,0.24,0.58  c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.62-0.23s0.25-0.35,0.25-0.59c0-0.23-0.09-0.43-0.26-0.6  c-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.42,0.08-0.58,0.25C4.75,20.18,4.67,20.38,4.67,20.61z M5.62,10.68  c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.61-0.23c0.17-0.16,0.25-0.35,0.25-0.59  c0-0.23-0.08-0.43-0.25-0.6C6.89,9.92,6.68,9.83,6.45,9.83c-0.22,0-0.42,0.08-0.58,0.25C5.7,10.25,5.62,10.45,5.62,10.68z   M8.65,8.37c0,0.24,0.08,0.43,0.24,0.58C9.05,9.12,9.25,9.2,9.47,9.2c0.24,0,0.45-0.08,0.62-0.23c0.17-0.16,0.25-0.35,0.25-0.59  c0-0.23-0.09-0.43-0.26-0.6C9.92,7.61,9.71,7.53,9.47,7.53c-0.22,0-0.42,0.08-0.58,0.25C8.73,7.94,8.65,8.14,8.65,8.37z M8.74,19.97  c0,0.23,0.08,0.43,0.25,0.58c0.16,0.16,0.35,0.24,0.57,0.24c0.24,0,0.45-0.08,0.62-0.23c0.17-0.16,0.25-0.35,0.25-0.59  c0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.42,0.08-0.58,0.25C8.82,19.54,8.74,19.74,8.74,19.97z   M12.92,10.14c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.62-0.23s0.25-0.35,0.25-0.59  c0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.23,0-0.42,0.08-0.58,0.25C13,9.71,12.92,9.91,12.92,10.14z   M13.24,21.13c0,0.23,0.08,0.42,0.25,0.58c0.16,0.16,0.35,0.24,0.57,0.24c0.24,0,0.45-0.08,0.62-0.23c0.17-0.16,0.25-0.35,0.25-0.59  c0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.42,0.08-0.58,0.25S13.24,20.9,13.24,21.13z M17.72,9.98  c0,0.23,0.08,0.42,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.24,0,0.45-0.08,0.62-0.23c0.17-0.16,0.25-0.35,0.25-0.59  c0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.41,0.08-0.58,0.25C17.81,9.55,17.72,9.75,17.72,9.98z   M22.81,17.04c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.61-0.23c0.17-0.16,0.25-0.35,0.25-0.59  c0-0.23-0.08-0.43-0.25-0.6c-0.17-0.17-0.37-0.25-0.61-0.25c-0.23,0-0.42,0.08-0.58,0.25C22.9,16.61,22.81,16.81,22.81,17.04z"
          />
        </svg>{" "}
        <p>Wind Status</p>
      </span>
      <div className="text-center text-xl">
        <div className="text-6xl md:text-3xl font-semibold">
          {forecast.list[0].wind.speed}
        </div>{" "}
        km/h
      </div>
    </div>
  );
};

export default Wind;
