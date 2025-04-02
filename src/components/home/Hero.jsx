import React from "react";
import Navbar from "../Navbar";
import heroimage from "../../assets/heroimage.png";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { TbWash } from "react-icons/tb";
import { Link } from "react-router-dom";
import normal from "../../assets/normal.png";

function Hero() {
  return (
    <div className="p-4 md:p-6 lg:px-12 lg:py-10 xl:px-16 2xl:px-20 flex flex-col lg:flex-row gap-12 text-stone-800">
      {/* Left Content */}
      <div className="lg:w-3/5">
        <Navbar />
        <div className="mt-4 md:mt-6 p-6 md:p-10 lg:p-12 xl:p-16 rounded-3xl bg-blue-100">
          {/* Tagline */}
          <div className="flex mb-4 w-fit shadow-md md:shadow-lg xl:shadow-xl items-center border border-blue-200 rounded-full text-xs md:text-sm bg-stone-50 poppins-semibold text-stone-600">
            <div className="w-14 md:w-16 py-1 bg-blue-300 flex justify-center items-center">
              <img src={normal} alt="normal" className="w-4 md:w-5" />
            </div>
            <div className="px-2 md:px-3">Affordable, Fast and Best</div>
          </div>

          {/* Heading */}
          <h1 className="lilita-one-regular text-[clamp(2rem,6vw,4rem)] md:text-[clamp(2.5rem,5vw,4.5rem)] leading-tight">
            Best Washing with <span className="text-blue-600">Fast</span> and <span className="text-blue-600">Free</span> Delivery
          </h1>

          {/* Description */}
          <p className="mt-3 text-[clamp(1rem,2vw,1.2rem)] md:text-lg xl:text-xl text-stone-600">
            <span className="font-semibold text-stone-700">Law gate's first</span> and best laundry. <br />
            Starting at just <span className="font-semibold text-stone-700">25/- per kg</span>
          </p>

          {/* Button */}
          <div className="w-full flex justify-start">
            <Link to={"/order"}>
              <button className="mt-6 text-white px-6 py-3 md:px-7 md:py-4 text-lg md:text-xl rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 bg-blue-600 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mr-2"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
                Book Your Order
              </button>
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-between mt-10 gap-8 md:gap-12">
            <Feature icon={<TbTruckDelivery />} text="Pickup in 10 min" />
            <Feature icon={<GiReceiveMoney />} text="Affordable Price" />
            <Feature icon={<TbWash />} text="Surfexcel Wash" />
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-2/5 flex justify-center items-end">
        <img
          src={heroimage}
          alt="heroimage"
          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] object-contain"
        />
      </div>
    </div>
  );
}

// Feature Component
const Feature = ({ icon, text }) => (
  <div className="flex flex-col justify-center items-center gap-2">
    <div className="text-3xl md:text-4xl xl:text-5xl">{icon}</div>
    <div className="text-sm md:text-lg xl:text-xl poppins-regular text-center">{text}</div>
  </div>
);

export default Hero;
