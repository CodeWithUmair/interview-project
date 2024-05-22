import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

export default function ThreeeCards() {
  // useGSAP(() => {
  //   gsap.from("#home", {
  //     scale: 1.3,
  //     duration: 3,
  //     ease: "power2.out",
  //   });
  // });

  // useGSAP(() => {
  //   gsap.from(".UM_Fade_In", {
  //     opacity: 0,
  //     duration: 3,
  //     stagger: 0.4,
  //     ease: "power2.out",
  //     delay: 2, // Start the fade-in after the zoom-out effect
  //   });
  // });

  return (
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between lg:flex-row ">
            {/* Mobile Image */}
            <Image
              src="/images/left-girl.png"
              alt="Left Girl"
              width={280}
              height={300}
              className="Left_Slide block md:hidden"
            />
            {/* Desktop IMage */}
            <Image
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
              src="/images/right-girl.png"
              alt="Right Girl"
              width={280}
              height={300}
              className="Right_Slide hidden md:block"
            />
            {/* Mobile Image */}

            <Image
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
