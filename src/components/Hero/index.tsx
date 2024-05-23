"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import ThreeeCards from "./threeCards";

const Hero = () => {
  const heroRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useGSAP(() => {
    const triggerAnimation = () => {
      gsap.fromTo(
        "#home",
        { scale: 1.3 },
        { scale: 1, duration: 3, ease: "power2.out" },
      );

      gsap.fromTo(
        ".UM_Fade_In",
        { opacity: 0 },
        { opacity: 1, duration: 3, stagger: 0.4, ease: "power2.out", delay: 2 },
      );
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerAnimation();
        }
      });
    };

    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.1, // trigger when 10% of the section is visible
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    if (heroRef.current) {
      observerRef.current.observe(heroRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <section
        id="Home"
        ref={heroRef}
        className="relative z-10 overflow-hidden bg-white bg-[url('/images/home-bg.png')] bg-cover bg-center bg-no-repeat pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 mt-10 flex flex-wrap">
            <div className="w-full px-4">
              <div className="UM_Fade_In mx-auto max-w-4xl text-center xl:max-w-6xl">
                <h1 className=" mb-5 text-2xl font-bold leading-tight text-black dark:text-[#ECD200] sm:leading-tight md:text-3xl md:leading-tight xl:text-5xl">
                  DIGITAL COLLECTIBLES FOR THE CREATOR ECONOMY
                </h1>
                <p className=" mx-auto mb-12 max-w-xl text-sm !leading-relaxed text-body-color dark:text-body-color-dark md:text-base">
                  Discover Superheroine Era, join The League and gain prime
                  access to exclusive launch information and giveaways.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="#"
                    className="rounded-[50px] bg-yellow p-3 px-6 py-2 text-sm font-semibold text-black outline outline-offset-1 outline-yellow duration-300 ease-in-out hover:bg-primary/80 hover:text-yellow hover:outline-2 md:p-5 md:px-8 md:py-4 md:text-base"
                  >
                    Let&apos;s Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10"></div>

        {/* I like Code Splitting, Better for everyone to read my code 😊 */}
        <div className="UM_Fade_In">
          <ThreeeCards />
        </div>
      </section>
    </>
  );
};

export default Hero;
