import React from "react";

function Footer() {
  return (
    <>
      <footer className="flex gap-[5rem] flex-col justify-center items-center text-white py-[1rem] md:py-[3rem]">
        <p>Trusted by the world’s most ambitious teams.</p>
        <div className="w-full h-max gap-[10px] flex flex-col justify-center items-center px-[7rem]">
          <hr className="w-full h-1 border-none bg-gradient-to-r from-purple-700 via-blue-500 to-teal-500" />
          <div className="flex w-full md:flex-row flex-col justify-between items-center">
            <p className="text-center">Copyright © 2022 DOML. All rights reserved.</p>
            <p className="text-center">Terms of Use & Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
