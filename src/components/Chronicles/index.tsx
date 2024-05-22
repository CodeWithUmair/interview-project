import Image from "next/image";

export default function Chronicles() {
  return (
    <section id="chronicles" className="bg-slate-950 pt-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="max-w-8xl to-yellow-100 flex items-center justify-between rounded-2xl bg-gradient-to-br from-slate-200 px-5">
              <div className="leading-0 w-[45%]">
                <Image
                  src={"/images/center-girl.png"}
                  alt="Center Girl"
                  width={400}
                  height={800}
                />
              </div>
              <div className="flex w-[55%] flex-col items-start justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
