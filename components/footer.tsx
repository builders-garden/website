import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <div className="w-full z-10 px-6 md:px-16 pb-4 md:pb-6">
      <div className="w-full border-t-1 border-white" />
      <div className="rounded-[120px] px-0 md:px-5 py-3 justify-between items-center flex z-[100] pt-8">
        <Image
          src={"/logo-tree-white.svg"}
          height={24}
          width={24}
          alt="Builders Garden logo white"
          className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
        />
        <div className="flex gap-8">
          <p className="text-xs md:text-md text-center md:text-left">
            ©2025 Builders Garden.
            <br className="block md:hidden" />
            All rights reserved. <br className="block md:hidden" />
            Designed by{" "}
            <Link
              href="https://stefanopomelli.com"
              isExternal
              className="text-[#92DDDB] font-semibold text-xs md:text-md"
            >
              Stefano Pomelli
            </Link>
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://linkedin.com/builders-garden" isExternal>
            <Image
              src={"/icons/linkedin.svg"}
              width={24}
              height={24}
              alt={"Linkedin logo"}
              className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
            />
          </Link>
          <Link href="https://github.com/builders-garden" isExternal>
            <Image
              src={"/icons/github-white.svg"}
              width={24}
              height={24}
              alt={"Github logo"}
              className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
            />
          </Link>
          <Link href="https://twitter.com/buildersgarden" isExternal>
            <Image
              src={"/icons/twitter-white.svg"}
              width={24}
              height={24}
              alt={"Twitter logo"}
              className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
