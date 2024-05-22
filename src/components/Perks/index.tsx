import Image from "next/image";
import Link from "next/link";

export default function CommunityPerks() {
  return (
    <section
      id="perks"
      className="flex min-h-screen items-center justify-center bg-slate-950 pt-10"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center text-center">
              <h3 className="mb-5 w-fit border-b-4 border-[#7E1C29] text-xl font-bold leading-tight text-white 2xl:text-3xl ">
                Community Perks
              </h3>
              <h2 className="mb-5 text-2xl font-bold leading-tight text-yellow dark:text-[#ECD200] 2xl:text-5xl">
                JOIN THE LEAGUE
              </h2>
              <Image
                src={"/images/LandPage.png"}
                alt="Land Page"
                width={600}
                height={300}
                className="block 2xl:hidden"
              />
              <Image
                src={"/images/LandPage.png"}
                alt="Land Page"
                width={800}
                height={400}
                className="hidden 2xl:block"
              />
              <p className="mx-auto mb-10 mt-5 max-w-2xl text-xs !leading-relaxed text-body-color dark:text-body-color-dark 2xl:text-base">
                A new society and group of enthusiasts awaits you. Join us in a
                new Era. Sign-up for our newsletter to gain insider access and
                exclusive updates.
              </p>

              <Link
                href="/#home"
                className="ease-in-up hidden w-40 rounded-sm border border-[#ECD200] bg-primary px-2 py-3 text-center text-xs font-medium text-[#ECD200] shadow-[7px_7px_0px_0px_rgba(236,210,0)] transition duration-300 hover:border-[#ffffff] hover:bg-opacity-90 hover:shadow-btn-hover md:px-9 lg:block lg:px-5 2xl:px-2"
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
