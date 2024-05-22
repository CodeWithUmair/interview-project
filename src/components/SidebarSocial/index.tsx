import Image from "next/image";
import Link from "next/link";

export default function SidebarSocial() {
  return (
    <div className="fixed right-0 top-0 z-50 flex h-full flex-col items-center justify-center">
      <div className="flex flex-col gap-4">
        <Link
          href="YOUR_FACEBOOK_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <Image
            src={"/images/x.png"}
            alt="X Logo"
            width={80}
            height={80}
            className="hidden md:block"
          />
          <Image
            src={"/images/x.png"}
            alt="X Logo"
            width={80}
            height={80}
            className="block md:hidden"
          />
        </Link>
        <Link
          href="YOUR_TWITTER_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <Image
            src={"/images/discord.png"}
            alt="X Logo"
            width={70}
            height={70}
            className="hidden md:block"
          />
          <Image
            src={"/images/discord.png"}
            alt="X Logo"
            width={80}
            height={80}
            className="block md:hidden"
          />
        </Link>
        <Link
          href="YOUR_INSTAGRAM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <Image
            src={"/images/x.png"}
            alt="X Logo"
            width={80}
            height={80}
            className="hidden md:block"
          />
          <Image
            src={"/images/x.png"}
            alt="X Logo"
            width={80}
            height={80}
            className="block md:hidden"
          />
        </Link>
        <Link
          href="YOUR_LINKEDIN_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <Image
            src={"/images/x.png"}
            alt="X Logo"
            width={80}
            height={80}
            className="hidden md:block"
          />
          <Image
            src={"/images/x.png"}
            alt="X Logo"
            width={80}
            height={80}
            className="block md:hidden"
          />
        </Link>
      </div>
    </div>
  );
}
