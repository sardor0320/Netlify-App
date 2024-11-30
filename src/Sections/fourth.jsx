import React from "react";
// import Navbar from "../components/navbar";
import { IoIosArrowRoundForward } from "react-icons/io";

function Fourth() {
  return (
    <>
      {/* <Navbar /> */}
      <div class="sm:px-6 lg:px-8  flex md:flex-row flex-col justify-center md:pt-0 md:text-opacity-0 items-center md:justify-evenly w-full h-[70vh] lg:mt-[10rem] xl:mt-0 mt-[10rem]">
        <div class="relative flex items-end md:mt-0 mt-[45rem]">
          {/* <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-blue-700 opacity-50 blur-3xl"></div> */}
          {/* <div class="absolute inset-0 rounded-full border-2 border-purple-600 animate-spin slow-spin"></div> */}
          <img
            className="w-[531px] h-[531px]"
            src="https://s3-alpha-sig.figma.com/img/8387/f65a/ec4444a6b642118b6518730921604362?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iMvB433xpZH2PtN1pTraUaxTt5rKyoPXeDC7s40evobfNruXfv43OwvZ20DN36I5yB8UfVBev2nKWCd9Q9-4NaIvGL6haEeekfYbqOyD22Rmz352lZ-QEW3TvRHM37lH7~3KzJEgKGkmxnLufL-jIK~DG-ykRkOKTAmtxhP9RHuTclRP-S2YyhQocnPLuY5A00pV7HXqX4kVsuLJMmH87zivBPeiQlNfUv8bClV8bh4GL3EfjhbWAjhuzHN0Q0Rv1m~k4uB06gRROT6TtgflRibi1UNwQPO7RNQ0PTCbb07F8OYokODq55JbMzfeoQlKdGmxtVWZSZbe71gC5FNP0A__"
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
            It's all about getting your message in front of the right <br className="hidden md:block" /> audience
            and creating those valuable <span class="text-[#0075FF]">relationships.</span> <br className="hidden md:block" /> Learn More about how DOML
            can help you do just <br className="hidden md:block" /> that - all with a simple, easy-to-use platform.
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
      </div>
    </>
  );
}

export default Fourth;
