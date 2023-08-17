import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string;
  href: string;
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: ["Home", "Exchange", "Features", "FAQ"],
  },
];

const socialLinks: Social[] = [
  { imgsrc: "/images/Footer/insta.svg", href: "https://instagram.com/" },
  { imgsrc: "/images/Footer/dribble.svg", href: "https://dribble.com/" },
  { imgsrc: "/images/Footer/twitter.svg", href: "https://twitter.com/" },
  { imgsrc: "/images/Footer/youtube.svg", href: "https://youtube.com/" },
];

const footer = () => {
  return (
    <div className=" ">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="">
          <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>
          <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
            <Image
              src={"/images/Footer/number.svg"}
              alt="number-icon"
              width={20}
              height={20}
            />
            (406) 555-012
          </h4>
          <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
            <Image
              src={"/images/Footer/email.svg"}
              alt="email-icon"
              width={20}
              height={20}
            />
            tim.jennings@example.com
          </h4>
          <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
            <Image
              src={"/images/Footer/address.svg"}
              alt="address-icon"
              width={20}
              height={20}
            />
            Elgin St. Celina, Delaware 10299
          </h4>
        </div>
      </div>
      <div className="flex justify-center gap-4 w-full my-3">
        {socialLinks.map((items, i) => (
          <Link href={items.href} key={i}>
            <img src={items.imgsrc} alt={items.imgsrc} />
          </Link>
        ))}
      </div>

      {/* All Rights Reserved */}

      <div className="py-8 px-4 border-t border-t-lightblue">
        <h3 className="text-center text-offwhite">
          @2023 - All Rights Reserved by{" "}
          <Link href="https://adminmart.com/" target="_blank">
            {" "}
            Adminmart.com
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default footer;
