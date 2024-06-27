import React from "react";
import Banner_pic from "../assets/Banner_pic.jpg";

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-0 md:pl-10 px-4 flex flex-col md:flex-row my-20">
        <div className="w-full md:w-1/2">
          <div className="left w-full md:w-full mt mt-12 md:mt-32">
            <h1 className="text-4xl font-bold">
              Hello,welcome here to learn something
              <span className="text-pink-500"> new everyday!!</span>
            </h1>
            <p className=" font-semibold mt-12">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              non culpa sit a sequi incidunt facilis ullam, officiis reiciendis
              sunt ipsum iure amet repellat, perferendis quae magnam vitae
              veniam voluptates!
            </p>
          </div>
          <label className="input input-bordered flex items-center gap-2 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Enter your Email Id" />
          </label>
            <button className="btn btn-primary mt-6 ml-0">Subscribe</button>

        </div>


        <div className="w-full md:w-1/2">
         <img src={Banner_pic} alt="banner" className="w-92 h-92 mt-15"/>
        </div>
    </div>
    </>
  );
}

export default Banner;
