import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AiFillDiscord } from "react-icons/ai";

import "@splidejs/react-splide/css";

import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

import "@splidejs/react-splide/css/core";
import "./style.css";

function Slide() {
  return (
    <>
      <section class="px-12 relative mt-[35rem] md:mt-0" aria-label="Splide Basic HTML Example">
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            pagination: true,
            arrows: true,
            gap: "1rem",
          }}
          aria-label="Testimonials"
        >
          <SplideSlide>
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl px-24 py-24 gap-10 text-white flex flex-col md:flex-row text-center md:text-start items-center shadow-lg">
              <div className="relative w-[257px] h-[257px]">
                <img
                  src="https://splidejs.com/images/slides/general/01.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-3xl object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 blur-lg opacity-75 -z-10"></div>
              </div>
              <div>
                <p className="text-xl mb-10 max-w-[952px]">
                  It's all about getting your message in front of the right
                  audience and creating those valuable relationships. Learn more
                  about how DOML can help you do just that - all with a simple,
                  easy-to-use platform.
                </p>
                <h3 className="text-2xl font-semibold">Amaka Micheal</h3>
                <span className="text-sm opacity-80">
                  Media Executive, Buying & Control
                </span>
                <div className="mt-4 flex text-sm items-center gap-2">
                  <AiFillDiscord />
                  <p>DISCORD</p>
                </div>
              </div>
            </div>
          </SplideSlide>

          {/* Yana boshqa slaydlarni qo'shing */}
        </Splide>
      </section>
    </>
  );
}

export default Slide;
