import React from "react";
// import Navbar from "../components/navbar";
import { IoIosArrowRoundForward } from "react-icons/io";

function Desktop() {
  return (
    <>
      {/* <Navbar /> */}
      <div class="sm:px-6 lg:px-8 flex md:flex-row flex-col justify-center md:pt-0 md:text-opacity-0 items-center md:justify-evenly w-full h-[70vh] md:mt-[0rem] mt-20">
        <div class="relative xl:hidden flex items-end md:mt-0 mt-[45rem]">
          {/* <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-blue-700 opacity-50 blur-3xl"></div> */}
          {/* <div class="absolute inset-0 rounded-full border-2 border-purple-600 animate-spin slow-spin"></div> */}
          <img
            className="w-[543px] h-[543px]"
            src="https://s3-alpha-sig.figma.com/img/d297/115e/904f4a6cde4f981d27301d0563b8df15?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLEsJftuLRas6p88ZwnUrAdpSMQJvKCHJN08~VMt8P7RLicsJHIBYd0ZD-hYZ0UO-c86z3B73F~uNA7G7l8GIolIgYJFUd7MiPvLyCeKdSm5Rk0eeZl5ddE1oYOsA6zSTl751GjQh50KhHSc3~mETIyPMuqCBh99hJDwula9peQP5Z~XnzPKC4znTkT~YY30XteNjQ4jG1hllbTvtr81agVNljMfRtciqU2gCdoihm~mLBP9u3GpqGZI2NFJ0xGQxDEDxw~qXCcYZ3Ys3LG7n-T2OlUvPtmnSDOnC87cLnooJUXv8ezeWNOlhUwGL7zfp5aiAvSMwhy84J1k1CcJjA__"
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
        <div class="relative xl:flex hidden items-end md:mt-0 mt-[45rem]">
          {/* <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-blue-700 opacity-50 blur-3xl"></div> */}
          {/* <div class="absolute inset-0 rounded-full border-2 border-purple-600 animate-spin slow-spin"></div> */}
          <img
            className="w-[543px] h-[543px]"
            src="https://s3-alpha-sig.figma.com/img/d297/115e/904f4a6cde4f981d27301d0563b8df15?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLEsJftuLRas6p88ZwnUrAdpSMQJvKCHJN08~VMt8P7RLicsJHIBYd0ZD-hYZ0UO-c86z3B73F~uNA7G7l8GIolIgYJFUd7MiPvLyCeKdSm5Rk0eeZl5ddE1oYOsA6zSTl751GjQh50KhHSc3~mETIyPMuqCBh99hJDwula9peQP5Z~XnzPKC4znTkT~YY30XteNjQ4jG1hllbTvtr81agVNljMfRtciqU2gCdoihm~mLBP9u3GpqGZI2NFJ0xGQxDEDxw~qXCcYZ3Ys3LG7n-T2OlUvPtmnSDOnC87cLnooJUXv8ezeWNOlhUwGL7zfp5aiAvSMwhy84J1k1CcJjA__"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Desktop;
