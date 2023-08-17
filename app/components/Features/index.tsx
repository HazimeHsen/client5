import Image from "next/image";

interface featuresdata {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const featuresdata: featuresdata[] = [
  {
    imgSrc: "/images/Features/featureOne.svg",
    heading: "Secure storage",
    subheading: "We lake data security and privacy very seriously",
  },
  {
    imgSrc: "/images/Features/featureTwo.svg",
    heading: "Free to use",
    subheading: "Top notch crypto portfolio traking at no cost",
  },
  {
    imgSrc: "/images/Features/featureThree.svg",
    heading: "Real-time price data",
    subheading: "Updating 24/7 using price data form the biggest exchanges",
  },
];

const Features = () => {
  return (
    <div
      className="mx-auto z-10 max-w-7xl my-0 md:my-40 px-6 "
      id="blogs-section">
      <div className="gap-4">
        {/* Column-1 */}
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-semibold mb-4 text-center ">Blogs</h3>
          <h2 className="text-offwhite max-w-lg text-sm lg:text-base font-semibold leading-snug mb-6 text-center w-full flex justify-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            dignissimos nisi, recusandae blanditiis atque neque error dolorem.
            Expedita deleniti fugiat in delectus, quam similique repellendus,
            ipsam minima, veritatis voluptas praesentium!
          </h2>
        </div>
        {/* Column-2 */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
            {featuresdata.map((items, i) => (
              <div
                key={i}
                className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="/images/blog.jpg" alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {items.heading}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {items.subheading}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
