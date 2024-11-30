import React, { useEffect, useState } from "react";
import {
  adobe,
  airbnb,
  airTel,
  cloud,
  cocacola,
  creativeCloud,
  dangote,
  discord,
  ebay,
  facebook,
  figma,
  firstBank,
  linux,
  mtn,
  netflix,
  paga,
  payPal,
  spotify,
  uba,
  zoom,
} from "../assets/img";

const images = [
  airTel,
  uba,
  paga,
  mtn,
  dangote,
  firstBank,
  cloud,
  ebay,
  linux,
  spotify,
  airbnb,
  facebook,
  cocacola,
  zoom,
  creativeCloud,
  netflix,
  discord,
  figma,
  payPal,
  adobe,
];

const SupportSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 756);

  // Ekran o'lchami o'zgarganda qayta render qilish uchun
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 756);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobil uchun faqat 6 ta ikonka tanlanadi
  const mobileImages = images.slice(0, 6);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-x-[13.95rem] gap-y-20 px-4 md:px-[9rem] md:mb-0 mb-[20rem]">
        {(isMobile ? mobileImages : images).map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              className="object-contain"
              src={image}
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </div>
      <p className="text-center text-white text-lg my-10">
        Trusted by the world’s most ambitious teams.
      </p>
    </>
  );
};

export default SupportSection;
