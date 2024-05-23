import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

export default function ThreeCards() {
  // const leftRef = useRef();
  // const rightRef = useRef();

  // useGSAP(() => {
  //   gsap.fromTo(
  //     leftRef.current,
  //     {
  //       x: "-100%",
  //     },
  //     {
  //       x: "0%",
  //       duration: 2,
  //       ease: "power2.out",
  //       delay: 2,
  //     },
  //   );

  //   gsap.fromTo(
  //     rightRef.current,
  //     {
  //       x: "+100%",
  //     },
  //     {
  //       x: "0%",
  //       duration: 2,
  //       ease: "power2.out",
  //       delay: 2,
  //     },
  //   );
  // }, []);

  return (
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between lg:flex-row ">
            {/* Mobile Image */}
            <Image
              // ref={leftRef}
              src="/images/left-girl.png"
              alt="Left Girl"
              width={280}
              height={300}
              className="Left_Slide block md:hidden"
            />
            {/* Desktop IMage */}
            <Image
              // ref={leftRef}
              src="/images/left-girl.png"
              alt="Left Girl"
              width={280}
              height={300}
              className="Left_Slide hidden md:block"
            />
            <Image
              src="/images/center-girl.png"
              alt="Center Girl"
              width={480}
              height={600}
              className="mb-7 lg:mb-0"
            />
            <Image
              // ref={rightRef}
              src="/images/right-girl.png"
              alt="Right Girl"
              width={280}
              height={300}
              className="Right_Slide hidden md:block"
            />
            {/* Mobile Image */}

            <Image
              // ref={rightRef}
              src="/images/right-girl.png"
              alt="Right Girl"
              width={280}
              height={300}
              className="Right_Slide block md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
