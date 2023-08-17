"use client";
import { BsWhatsapp } from "react-icons/bs";

export default function ScrollToTopButton() {
  return (
    <div className="relative">
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=96178905718"
        className="fixed bottom-[20px] right-[20px] ">
        <div className={`bg-green z-50  p-3 rounded-full`}>
          <BsWhatsapp size={25} />
        </div>
      </a>
    </div>
  );
}
