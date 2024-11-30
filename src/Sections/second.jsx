import React from "react";
// import Navbar from "../components/navbar";
import { IoIosArrowRoundForward } from "react-icons/io";

function Desktop() {
  return (
    <>
      {/* <Navbar /> */}
      <div class="sm:px-6 lg:px-8 flex md:flex-row flex-col justify-center md:pt-0 md:text-opacity-0 items-center md:justify-evenly w-full h-[60vh]">
      <div class="relative xl:hidden flex items-end  ">
          {/* <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-blue-700 opacity-50 blur-3xl"></div> */}
          {/* <div class="absolute inset-0 rounded-full border-2 border-purple-600 animate-spin slow-spin"></div> */}
          <img
            className="w-[531px] h-[531px]"
            src="https://s3-alpha-sig.figma.com/img/e509/f62d/d8da0e72ccc47f8e3c0cd9c94f9d8c4e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FemiyYTGfn~S~lhKmk5LivDeg-cEvlq4GRiRvYEvDOA2l9Naw~QCGMs5ypT8HmhrydDNgh5oKhhXsz7I3tsF3JH6bHhpR7veT~12MjG3spqKMsplswMRc9rcLGEjLGcW0gqwt1QVNI7MEPErrBlTXcJMYpz6RsBkZnRe2WXCRhODKmdbvxrv69gvmAfKBMwkksHW1VrlctSZ9t-gNgJq7fZaDkrbFtZ0lxPS8LePjoL8MCRjYQJcGISIaKOEXHwXykSaxvgZrX08EqhtDAk98BFpt6o2vIJ8zJqIXlggzBLNnMhKsuy-9FKwHN22G4GFuBls34NJfoHu5xe4udE3jQ__"
            alt=""
          />
        </div>
        <div class="px-4 flex flex-col md:items-start gap-4 md:text-left text-center ">
          <h1 class="text-4xl md:text-4xl ">
            <span class="text-purple-500">AI</span>{" "}
            <span class="text-blue-500">Marketing</span>
            <br />
            <span class="text-gray-100">Optimized Reach</span>
          </h1>

          <p class="my-6 font-thin text-gray-200 cursor-vertical-text text-2xl max-w-2xl mx-auto">
            DOML is a digital media agency powered by AI{" "}
            <br className="hidden lg:block" /> technology providing real time,{" "}
            <span class="text-[#0075FF]">data-driven insights</span>
            <br className="hidden lg:block" /> on your business and audience.
            The mission of DOML
            <br className="hidden lg:block" /> is to create the best experiences
            for companies
            <br className="hidden lg:block" />
            through intelligent insights, powerful analytics and
            <br className="hidden lg:block" />{" "}
            <span class="text-[#0075FF]">strategic execution.</span>
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-purple-500 to-blue-500" />
          <button class="mt-8 flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-[1px] px-[1px] rounded-full transition-all duration-300">
            <div className="text-xl justify-center flex items-center gap-3 font-thin w-full h-full py-2 px-7 bg-black rounded-full">
              <p>Get Started</p>
              <p class="text-4xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 bg-clip-text text-transparent">
                <IoIosArrowRoundForward
                  size={30}
                  className="text-white text-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                />
              </p>
            </div>
          </button>
        </div>
        <div class="relative xl:flex hidden items-end  ">
          {/* <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-blue-700 opacity-50 blur-3xl"></div> */}
          {/* <div class="absolute inset-0 rounded-full border-2 border-purple-600 animate-spin slow-spin"></div> */}
          <img
            className="w-[531px] h-[531px]"
            src="https://s3-alpha-sig.figma.com/img/e509/f62d/d8da0e72ccc47f8e3c0cd9c94f9d8c4e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FemiyYTGfn~S~lhKmk5LivDeg-cEvlq4GRiRvYEvDOA2l9Naw~QCGMs5ypT8HmhrydDNgh5oKhhXsz7I3tsF3JH6bHhpR7veT~12MjG3spqKMsplswMRc9rcLGEjLGcW0gqwt1QVNI7MEPErrBlTXcJMYpz6RsBkZnRe2WXCRhODKmdbvxrv69gvmAfKBMwkksHW1VrlctSZ9t-gNgJq7fZaDkrbFtZ0lxPS8LePjoL8MCRjYQJcGISIaKOEXHwXykSaxvgZrX08EqhtDAk98BFpt6o2vIJ8zJqIXlggzBLNnMhKsuy-9FKwHN22G4GFuBls34NJfoHu5xe4udE3jQ__"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Desktop;
