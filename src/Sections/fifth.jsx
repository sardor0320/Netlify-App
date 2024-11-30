import React from "react";
// import Navbar from "../components/navbar";
import { IoIosArrowRoundForward } from "react-icons/io";

function Fifth() {
  return (
    <>
      {/* <Navbar /> */}
      <div class="sm:px-6 lg:px-8  flex md:flex-row flex-col justify-center md:pt-0 md:text-opacity-0 items-center md:justify-evenly w-full h-[70vh] lg:mt-[0rem] md:mt-0 mt-[40rem]">
        <div class="relative flex items-end md:mt-0 mt-[15rem]">
          {/* <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-blue-700 opacity-50 blur-3xl"></div> */}
          {/* <div class="absolute inset-0 rounded-full border-2 border-purple-600 animate-spin slow-spin"></div> */}
          <img
            className="w-[641px] h-[475px]"
            src="https://s3-alpha-sig.figma.com/img/35d4/5a3b/15465c65408c3a93ce2db5fe20bce5b0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qmOZgoL3TOrsrn0pMj5-mzGgaWyuJqysqGHm-nL74jz2tYcA9XKQ0ur9JzFvJwdhLqid9vDgIEok-rWEqR6N4FNEqNb5eJ0pUQ6GaYg8AMi7AiJ2IxggQ0mzgszAymvOdKe3~BdWb9NN3Nt~RSPQucuMEbW2pygJqsOIrMH7weJYCuMkSGi87hzOUkwYJ2ggvGF9ug5A4sKKnLi~Njzdf-aMPfO7bK~I4d6RiqDipMuYdQjd8kkZ4ECESNQPrmWHwUCXyoyJ3g81ufpG1rRBem7PMLck25CpLQw7-saCIb4D7QOxBQgyL51txWeGguT4srluS5uCSYeSUkWkmfp84g__"
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
            It's all about getting your message in front of the right <br className="hidden lg:block" /> audience
            and creating those valuable relationships. <br className="hidden lg:block" /> Learn More about how DOML
            can help you do just <br className="hidden lg:block" /> that - all with a simple, easy-to-use platform.
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

export default Fifth;
