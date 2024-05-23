import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function DigitalCollectibles() {
  const digitalRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useGSAP(() => {
    if (isVisible) {
      gsap.from(digitalRef.current, {
        opacity: 0,
        y: -100,
        duration: 3,
        delay: 1,
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

    observer.observe(digitalRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={digitalRef}
      id="Digital-Collectibles"
      className={`flex min-h-screen items-center justify-center bg-slate-950 pt-10`}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-5 text-center">
              <h3 className="mb-5 w-fit border-b-4 border-[#7E1C29] text-2xl font-bold leading-tight text-white">
                DIGITAL COLLECTIBLES
              </h3>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-yellow dark:text-[#ECD200] xl:text-5xl">
                WELCOME TO THE NEXT LEAGUE OF DIGITAL COLLECTIBLES.
              </h2>
              <p className="mx-auto max-w-xl text-base !leading-relaxed text-body-color dark:text-body-color-dark md:text-xl">
                Imagine owning superhero IP before it made headlines. We&apos;re
                at the starting line of a digital IP innovation race, and a few
                fortunate early adopters are about to pilot the next wave of
                superhero market adoption. Rising to champion this movement is
                Superheroine Era.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
