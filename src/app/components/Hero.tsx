"use client";

import React from "react";
import Orb from "./ui/Orb";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const Hero = () => {
  return (
    <section
      id="voicebot-hero"
      className="w-full bg-[#0b0b0c] text-white mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24">
          {/* Left Content */}
          <div className="w-full lg:w-[60%] mb-12 lg:mb-0">
            <div className="w-full">
              <div className="w-full">
                <div className="mb-8">
                  {/* <HoverBorderGradient
            containerClassName="rounded-full"
            as="div"
            className=" text-[#D1AAD7] px-4 py-1 tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase"
            duration={2}
          >
            Opening January 2026
          </HoverBorderGradient> */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 ">
                    Future of Long Island{" "}
                    <PointerHighlight
                      rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                      pointerClassName="  text-purple-400 "
                    >
                      <span className="relative z-10">Youth Sports</span>
                    </PointerHighlight>
                  </h1>
                </div>
                <div className="mb-8">
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                    Destination KP is a premier youth sports complex in Kings
                    Park, Long Island, opening January 2026.
                  </p>
                </div>
                <div className="w-full flex flex-col sm:flex-row gap-4">
                  <button className="css-a0ww07 relative bg-white cursor-pointer text-black font-medium py-3 px-8 rounded-lg transition-all duration-200 hover:scale-105 group overflow-hidden">
                    <span className="flex items-center justify-center gap-2 relative z-10">
                      <span>Explore Facilities</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>
                  {/* Gradient hover effect CSS moved to globals.css */}
                  {/* <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                    <span className="flex items-center justify-center">
                      <span>About Destination KP</span>
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Orb */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-96 h-96">
              <Orb
                hue={2}
                hoverIntensity={0.3}
                rotateOnHover={true}
                forceHoverState={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
