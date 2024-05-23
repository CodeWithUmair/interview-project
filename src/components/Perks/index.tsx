"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function CommunityPerks() {
  const perksRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useGSAP(() => {
    if (isVisible) {
      gsap.from(perksRef.current, {
        opacity: 0,
        y: -100,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.6,
      },
    );

    observer.observe(perksRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useGSAP(() => {
    if (isVisible) {
      gsap.from(".perksImage", {
        rotateY: 360,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [isVisible]);

  return (
    <section
      id="Perks"
      className="flex min-h-screen items-center justify-center bg-slate-950 pt-10"
    >
      <div className="container" ref={perksRef}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center text-center">
              <h3 className="mb-5 w-fit border-b-4 border-[#7E1C29] text-xl font-bold leading-tight text-white 2xl:text-3xl ">
                Community Perks
              </h3>
              <h2 className="mb-5 text-2xl font-bold leading-tight text-yellow dark:text-[#ECD200] 2xl:text-5xl">
                JOIN THE LEAGUE
              </h2>
              <div className="relative">
                <Image
                  src={"/images/LandPage.png"}
                  alt="Land Page"
                  width={800}
                  height={400}
                  className="perksImage hidden 2xl:block"
                />
                {/* <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center"> */}
                <Image
                  src={"/images/LandPage.png"}
                  alt="Land Page"
                  width={600}
                  height={300}
                  className="perksImage block 2xl:hidden"
                />
                {/* </div> */}
              </div>
              <p className="mx-auto mb-10 mt-5 max-w-2xl text-xs !leading-relaxed text-body-color dark:text-body-color-dark 2xl:text-base">
                A new society and group of enthusiasts awaits you. Join us in a
                new Era. Sign-up for our newsletter to gain insider access and
                exclusive updates.
              </p>

              <Link
                href="/#home"
                className="ease-in-up  w-40 rounded-sm border border-[#ECD200] bg-primary px-2 py-3 text-center text-xs font-medium text-[#ECD200] shadow-[7px_7px_0px_0px_rgba(236,210,0)] transition duration-300 hover:border-[#ffffff] hover:bg-opacity-90 hover:shadow-btn-hover md:px-9 lg:block lg:px-5 2xl:px-2"
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
