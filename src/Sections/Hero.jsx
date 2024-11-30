import React from "react";
import Navbar from "../components/navbar";
import { IoIosArrowRoundForward } from "react-icons/io";

function Desktop() {
  return (
    <>
    <Navbar/>
      <div class="sm:px-6 lg:px-8 flex md:flex-row flex-col md:mb-0 mb-[20rem] justify-center md:pt-0  pt-[20rem] md:text-opacity-0 items-center md:justify-evenly w-full h-screen">
      <div class="relative xl:hidden flex items-end  ">
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-blue-700 opacity-50 blur-3xl"></div>
          {/* <div class="absolute inset-0 rounded-full border-2 border-purple-600 animate-spin slow-spin"></div> */}
          <img className="w-[546px] h-[526]" width="546px" src="https://s3-alpha-sig.figma.com/img/61ee/f9e1/c482cbc7c3f35823bec718e4a8075031?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dP5f-hgKBRkaDrz0f4o5uNwrUUP~JCJPYiXpiMd97mdR0SQUL4EyOwX0yUMYyNS11opsn2IPg1Hv6Nt2gZOqIZZKk5WSmvcLZNjHzFzVm9FddU4I2R0CNaNllwMGwQQ~b2bhA4LOoCyGhJGpg6bSlSmwK1UYtFsfBm9mOtRlKOpTdAyyfyR0MJs8bbycNehVd1v33iAqUi7OVKzgPEtZj2MYeDNzrysY6sMBjs8r1th863SUCzEtYbvCTNeOdTJ3RpzOsaMi0Ue5Ctjj4BrUqXHdI4XhRJwtk7BhUVt6FyavU9qqSsGU60DP60lxCj6~9S65ZeVpwARU-iUL-QGPCw__" alt="" />
        </div>
        <div class="px-4 flex flex-col md:items-start gap-4 md:text-left text-center ">
          <h1 class="text-5xl md:text-6xl font-bold">
            <span class="text-purple-500">AI</span>{" "}
            <span class="text-blue-500">Marketing.</span>
            <br />
            <span class="text-gray-100">Optimized Reach.</span>
          </h1>

          <p class="my-6 font-thin text-gray-200 cursor-vertical-text text-2xl max-w-2xl mx-auto">
            Our vision is to revolutionize the way brands and <br className="hidden lg:block" /> advertisers
            target, reach.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-purple-500 to-blue-500"/>
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
        <div class="relative hidden xl:flex items-end  ">
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-blue-700 opacity-50 blur-3xl"></div>
          {/* <div class="absolute inset-0 rounded-full border-2 border-purple-600 animate-spin slow-spin"></div> */}
          <img className="w-[546px] h-[526]" width="546px" src="https://s3-alpha-sig.figma.com/img/61ee/f9e1/c482cbc7c3f35823bec718e4a8075031?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dP5f-hgKBRkaDrz0f4o5uNwrUUP~JCJPYiXpiMd97mdR0SQUL4EyOwX0yUMYyNS11opsn2IPg1Hv6Nt2gZOqIZZKk5WSmvcLZNjHzFzVm9FddU4I2R0CNaNllwMGwQQ~b2bhA4LOoCyGhJGpg6bSlSmwK1UYtFsfBm9mOtRlKOpTdAyyfyR0MJs8bbycNehVd1v33iAqUi7OVKzgPEtZj2MYeDNzrysY6sMBjs8r1th863SUCzEtYbvCTNeOdTJ3RpzOsaMi0Ue5Ctjj4BrUqXHdI4XhRJwtk7BhUVt6FyavU9qqSsGU60DP60lxCj6~9S65ZeVpwARU-iUL-QGPCw__" alt="" />
        </div>
      </div>
    </>
  );
}

export default Desktop;
