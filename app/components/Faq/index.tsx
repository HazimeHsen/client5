"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface faqdata {
  heading: string;
  subheading: string;
}

const faqdata: faqdata[] = [
  {
    heading: "1. What is swim training?",
    subheading:
      "Swim training is a structured program designed to help individuals of all skill levels improve their swimming techniques and overall performance in the water. Whether you're a beginner learning to swim or an experienced athlete aiming to enhance your strokes, swim training offers personalized guidance and exercises.",
  },
  {
    heading: "2. How can swim training benefit me?",
    subheading:
      "Swim training offers numerous benefits, including improved cardiovascular fitness, enhanced muscle strength, increased lung capacity, and better flexibility. Additionally, it helps refine your swimming techniques, leading to more efficient and effortless swimming, whether for recreational purposes or competitive swimming.",
  },
  {
    heading: "3. Who can benefit from swim training?",
    subheading:
      "Swim training is suitable for individuals of all ages and skill levels. From beginners looking to overcome water anxiety to advanced swimmers striving for competitive success, swim training provides customized support and guidance to help individuals achieve their swimming goals.",
  },
];

const SwimFaq = () => {
  return (
    <div className="my-14 px-6" id="faq-section">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">
        Frequently Asked Questions
      </h3>

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          {/* Column-1 */}
          <div>
            <div className="w-full px-4 pt-8">
              {faqdata.map((items, i) => (
                <div
                  className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5"
                  key={i}>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                          <span>{items.heading}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">
                          {items.subheading}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>

          {/* Column-2 */}
          <div className="lg:mt-32 mt-5">
            <Image
              src={"/images/Faq/faq.svg"}
              alt="faq-image"
              width={941}
              height={379}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwimFaq;
