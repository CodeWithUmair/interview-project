import Image from "next/image";
import { Urbanist } from "next/font/google";
import Link from "next/link";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Chronicles() {
  return (
    <section
      id="chronicles"
      className="flex min-h-screen items-center justify-center bg-slate-950 py-10"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="x-5 relative mx-auto flex max-w-6xl items-center justify-between rounded-2xl bg-gradient-to-tl from-slate-400/30 to-stone-400/30 p-5">
              <div className="leading-0 flex w-[45%] items-center justify-center">
                <Image
                  src={"/images/center-girl.png"}
                  alt="Center Girl"
                  width={420}
                  height={850}
                />
              </div>
              <div className="flex w-[55%] flex-col items-start justify-center gap-4">
                <Image
                  src={"/images/yellow.png"}
                  alt="Center Girl"
                  width={350}
                  height={30}
                />
                <h4 className="uppercase text-yellow">ABOUT US</h4>
                <p className={`text-sm ${urbanist.className}`}>
                  Superheroine Era is a digital collectibles project that aims
                  to design a new society of superheroes. Launching with an
                  evocative 3-act, 54-scene screenplay and otherworld based on
                  the digital collectibles, with each of the 54-scenes evolving
                  into its own unique comic and character storylines. Traverse
                  this world with us, co-create and enrich the expansive
                  universe. 
                </p>
                <span className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="inline uppercase text-yellow">
                    TO OUR HOLDERS:
                  </h4>
                  <p className={`text-sm ${urbanist.className}`}>
                    brace yourselves for what&apos;s coming. It&apos;s going to
                    be legendary!
                  </p>
                </span>
                <p className={`text-sm ${urbanist.className}`}>
                  Our mission is to foster ownership and engagement within our
                  web-3 brand by bridging the gap between our community and the
                  web-2 world, creating a space where members can participate
                  through incentives and mechanics without compromising the
                  integrity of their NFTs
                </p>
                <p className={`text-sm ${urbanist.className}`}>
                  Join us on{" "}
                  <span className="text-yellow underline">Discord</span> &{" "}
                  <span className="text-yellow underline">Twitter </span>
                </p>

                <Link
                  href="#"
                  className="ease-in-up hidden w-40 rounded-sm border border-[#ECD200] bg-primary px-2 py-3 text-center text-xs font-medium text-[#ECD200] shadow-[7px_7px_0px_0px_rgba(236,210,0)] transition duration-300 hover:border-[#ffffff] hover:bg-opacity-90 hover:shadow-btn-hover md:px-9 lg:block lg:px-5 xl:px-2"
                >
                  Read More
                </Link>
              </div>
              <div
                className="absolute left-20 top-20 h-[300px] w-[300px] bg-[#ECD300] opacity-20 "
                style={{
                  transform: "matrix(0.8, 0.6, -0.6, 0.8, 0, 0)",
                  filter: "blur(50px)",
                }}
              ></div>
              <div
                className="absolute -bottom-10 -right-10 h-[200px] w-[200px] bg-[#ECD200] opacity-20 "
                style={{
                  transform: "matrix(0.8, 0.6, -0.6, 0.8, 0, 0)",
                  filter: "blur(50px)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
