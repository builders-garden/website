import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <div className="w-full hidden md:block z-10 px-16 pb-10">
      <div className="w-full border-t-1 border-white" />
      <div className="rounded-[120px] px-5 py-3 justify-between items-center hidden md:flex z-[100] pt-8">
        <Image
          src={"/logo-tree-white.svg"}
          height={46}
          width={46}
          alt="Builders Garden logo white"
        />
        <div className="flex gap-8">
          <p>
            ©2024 Builders Garden. All rights reserved. | Designed by{" "}
            <Link
              href="https://stefanopomelli.com"
              isExternal
              className="text-[#EBFAF8] font-semibold"
            >
              Stefano Pomelli
            </Link>
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://twitter.com/buildersgarden" isExternal>
            <Image
              src={"/twitter-white.svg"}
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
