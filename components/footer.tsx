import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <div className="w-full z-10 px-6 md:px-16 pb-4 md:pb-6">
      <div className="w-full border-t-1 border-white" />
      <div className="rounded-[120px] px-0 md:px-5 py-3 justify-between items-center flex z-[100] pt-8">
        <Image
          src={"/logo-tree-white.svg"}
          height={46}
          width={46}
          alt="Builders Garden logo white h-[32px] w-[32px] md:h-[46px] md:w-[46px]"
        />
        <div className="flex gap-8">
          <p className="text-xs md:text-md text-center md:text-left">
            ©2025 Builders Garden. All rights reserved. | Designed by{" "}
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
              height={28}
              width={28}
              alt={"Linkedin logo"}
            />
          </Link>
          <Link href="https://github.com/builders-garden" isExternal>
            <Image
              src={"/icons/github-white.svg"}
              height={28}
              width={28}
              alt={"Github logo"}
            />
          </Link>
          <Link href="https://twitter.com/buildersgarden" isExternal>
            <Image
              src={"/icons/twitter-white.svg"}
              height={28}
              width={28}
              alt={"Twitter logo"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
