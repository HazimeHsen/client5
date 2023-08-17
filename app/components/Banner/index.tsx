"use client";
import React, { useState } from "react";

const SwimBanner = () => {
  return (
    <div
      className="bg-blue-400 relative h-[90vh] lg:h-[60vh] lg:mb-[150px] flex justify-center items-center text-center px-4"
      id="home-section">
      <div className="water-droplet"></div>

      <div className="mx-auto max-w-7xl h-full flex items-center justify-center">
        <div className="pool-edge">
          <div className="text-center w-full">
            <div className="swimmer-icon"></div>
            <div className="w-full text-center flex flex-col items-center">
              <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px text-center">
                Dive into Fitness
                <br />
                with a Swim Trainer
              </h1>
              <p className="text-white w-full md:text-lg max-w-lg text-center font-normal mb-5">
                Get in shape and improve your swimming techniques with the
                guidance of our experienced swim trainers.
              </p>
              <div className="flex align-middle w-full justify-center">
                <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton">
                  Get Started
                </button>
              </div>
            </div>

            <div className="swimming-lane lg:-m-48">
              <div className="swim-wave"></div>
              <div className="swim-wave"></div>
              <div className="swim-wave"></div>
              <div className="swim-wave"></div>
              <div className="swim-wave"></div>
              <div className="swim-wave"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwimBanner;
