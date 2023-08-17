"use client";
import React from "react";
import Image from "next/image";

interface SwimWorkData {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
}

const swimWorkData: SwimWorkData[] = [
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Personalized Coaching",
    subheading:
      "Enhance your swimming techniques with one-on-one guidance from our expert swim trainers.",
    hiddenpara:
      "Our experienced coaches will analyze your strokes and provide personalized feedback to help you excel in the water.",
  },
  {
    imgSrc: "/images/Work/icon-two.svg",
    heading: "Water Fitness Workouts",
    subheading:
      "Stay in shape with invigorating water fitness routines designed to boost your strength and stamina.",
    hiddenpara:
      "Our tailored water workouts offer a refreshing and effective way to achieve your fitness goals.",
  },
  {
    imgSrc: "/images/Work/icon-three.svg",
    heading: "Performance Improvement",
    subheading:
      "Elevate your swim performance through advanced techniques and strategic training plans.",
    hiddenpara:
      "Our coaches will help you refine your skills and develop strategies for competitive success in the water.",
  },
];

const SwimWork = () => {
  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl px-6 mb-20 relative">
        <div className="text-center mb-10">
          <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
            Services
          </h3>
          <p className="md:text-lg font-normal leading-8">
            Dive into a world of swimming excellence with our personalized swim
            training services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32">
          {swimWorkData.map((items, i) => (
            <div className="relative" key={i}>
              <div className="bg-darkblue rounded-lg p-8">
                <div className="work-img-bg rounded-full w-fit absolute -top-[50px] left-1/2 transform -translate-x-1/2 p-6">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={44}
                    height={44}
                  />
                </div>
                <div>
                  <Image
                    src={"/images/Work/bg-arrow.svg"}
                    alt="arrow-bg"
                    width={85}
                    height={35}
                  />
                </div>
                <h3 className="text-2xl text-offwhite font-semibold text-center mt-8">
                  {items.heading}
                </h3>
                <p className="text-base font-normal text-bluish text-center mt-2">
                  {items.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwimWork;
