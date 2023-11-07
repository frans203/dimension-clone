import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

//   bg - [#dfdff50d];

export const Menu = () => {
  const blogRef = useRef(null);
  const aboutRef = useRef(null);
  const careersRef = useRef(null);
  const specialJoinRef = useRef(null);
  const changeRef = useRef(null);

  const [widthHoverButton, setWidthHoverButton] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [useTransition, setUseTransition] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setScrollingDown(true);
    } else {
      setScrollingDown(false);
    }
  });

  return (
    <div
      className={`z-10 fixed top-0 left-0 w-screen flex justify-between py-[18px] px-[22px] ${
        scrollingDown ? "" : "backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex justify-between lg:px-[100px] items-center relative transition-all">
        <button
          className={`flex items-center transform duration-[450ms] transition-all justify-center space-x-4 ${
            scrollingDown
              ? "invisible opacity-0 -translate-x-5"
              : "opacity-100 visible translate-x-0"
          }`}
        >
          <img
            src={"https://www.dimension.dev/build/q-715f17d1.png"}
            alt="Dimension Logo"
            className="w-[36px] h-[36px]"
          />

          <p className="text-[16px] font-medium">Dimension</p>
        </button>

        <div
          className={`duration-[450ms] transition-all absolute -bottom-[19px] h-[1.5px] border-bottom-nav w-full ${
            scrollingDown ? "invisible opacity-0 " : "opacity-100 visible "
          }`}
        ></div>

        <div
          className={`transition-all overflow-hidden border 
          rounded-3xl border-[#e2e8ff25] p-[4px] relative hidden lg:flex ${
            scrollingDown ? "bg-[#05052052] backdrop-blur-md" : ""
          }`}
        >
          <div
            className={`${
              scrollingDown ? "opacity-40" : "opacity-0"
            } absolute w-[100%] h-[20px] bg-gradient-to-t from-[#ffffff57] to-transparent 
            -bottom-[5px] left-0 z-[-1] transition-opacity duration-[450ms] blur-sm`}
          ></div>

          <div
            style={{
              width: widthHoverButton,
              left: offsetLeft,
            }}
            className={`absolute transition-opacity border border-[#dfdff51f] top-[4px] h-[37px] rounded-3xl  bg-[#dfdff50d]
          z-[-1] ${showButton ? " opacity-100" : "opacity-0"}`}
          />
          <div
            onMouseLeave={() => {
              setUseTransition(false);
              setShowButton(false);
            }}
            onMouseEnter={() => {
              setUseTransition(true);
              setShowButton(true);
            }}
          >
            <Link href="/" className="z-10">
              <button
                onMouseOver={(ev) => {
                  setWidthHoverButton(aboutRef.current.offsetWidth);
                  setOffsetLeft(aboutRef.current.offsetLeft);
                }}
                ref={aboutRef}
                className="text-[#e2e8ffbf] px-[20px] py-[8px] text-[14px] "
              >
                About
              </button>
            </Link>

            <Link href="/">
              <button
                ref={careersRef}
                onMouseOver={(ev) => {
                  setWidthHoverButton(careersRef.current.offsetWidth);
                  setOffsetLeft(careersRef.current.offsetLeft);
                }}
                className="text-[#e2e8ffbf] px-[20px] py-[8px] text-[14px]  rounded-3xl "
              >
                Careers{" "}
                <span className="text-[14px] py-[2px] px-[6px] bg-[#e2e8ff1e] rounded-full">
                  3
                </span>
              </button>
            </Link>

            <Link href="/">
              <button
                ref={blogRef}
                onMouseOver={(ev) => {
                  setWidthHoverButton(blogRef.current.offsetWidth);
                  setOffsetLeft(blogRef.current.offsetLeft);
                }}
                className="text-[#e2e8ffbf] px-[20px] py-[8px] text-[14px]"
              >
                Blog
              </button>
            </Link>

            <Link href="/">
              <button
                ref={changeRef}
                onMouseOver={(ev) => {
                  setWidthHoverButton(changeRef.current.offsetWidth);
                  setOffsetLeft(changeRef.current.offsetLeft);
                }}
                className="text-[#e2e8ffbf] px-[20px] py-[8px] text-[14px]"
              >
                Changelog
              </button>
            </Link>
          </div>

          <motion.div
            initial={"hidden"}
            animate={scrollingDown ? "visible" : "hidden"}
            variants={{
              visible: {
                translateX: "0px",
                width: "auto",
                transition: {
                  duration: 0.45,
                },
              },
              hidden: {
                translateX: "120px",
                width: 0,
                transition: {
                  duration: 0.45,
                },
              },
            }}
          >
            <Link className={``} href="/">
              <button
                className={` py-[6px] px-[14px]
             overflow-hidden transition-all duration-[450ms]
              whitespace-nowrap font-medium bg-backgroundPpy text-[14px] text-white  rounded-2xl mr-[4px] mt-[2px]`}
              >
                Join waitlist
              </button>
            </Link>
          </motion.div>
        </div>

        <div
          className={`duration-[450ms] transition-all p-[1px] rounded-lg background-lin-gradient-180 flex items-center justify-center ${
            scrollingDown
              ? "invisible opacity-0 translate-x-5"
              : "opacity-100 visible translate-x-0"
          }`}
        >
          <button
            className="rounded-lg text-[14px] 
        text-[#e2e8ffbf] px-[20px] py-[8px] relative overflow-hidden font-light
        bg-[#050520]
          z-10
      "
          >
            Join waitlist
            <div
              className="w-[200px] left-0 h-20  absolute top-3
           bg-gradient-to-t from-[#ffffff57] to-transparent 
           hover:top-0
            transition-all
            duration-[450ms]
           "
            />
          </button>
        </div>
      </div>
    </div>
  );
};
