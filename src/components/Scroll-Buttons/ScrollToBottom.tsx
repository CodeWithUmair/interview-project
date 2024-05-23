import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScrollButton({ sections }) {
  const [visibleSection, setVisibleSection] = useState(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5, // Adjust as needed
    });

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleButtonClick = () => {
    const nextSectionIndex = sections.indexOf(visibleSection) + 1;
    const nextSection = sections[nextSectionIndex];
    if (nextSection) {
      document.getElementById(nextSection).scrollIntoView({
        behavior: "smooth",
      });
    } else {
      document.getElementById("Home").scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    visibleSection && (
      <button
        className="fixed bottom-5 right-5 z-50 flex items-center justify-between text-white"
        onClick={handleButtonClick}
      >
        {`${sections[sections.indexOf(visibleSection) + 1] || sections[0]}`}
        <Image
          src={"/images/arrow.svg"}
          alt={"Arrow down"}
          width={50}
          height={50}
        />
      </button>
    )
  );
}
