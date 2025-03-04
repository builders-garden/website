import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export const NavbarComponent = () => {
  return (
    <div className="fixed w-full p-5 z-10">
      <div className="rounded-[120px] px-5 py-3 bg-gradient-to-tr from-[#171717] to-[#0E0E0E] justify-between items-center flex z-[100]">
        <Link href="/">
          <Image
            src={"/logo.svg"}
            className="hidden md:block w-[120px] h-[40px]"
            width={120}
            height={40}
            alt="Builders Garden logo desktop"
          />
          <Image
            src={"/tree.svg"}
            className="block md:hidden mx-1 w-[30px] h-[30px]"
            height={30}
            width={30}
            alt="Builders Garden logo mobile"
          />
        </Link>
        <div className="gap-3 md:gap-8 hidden md:flex">
          <Link href="#mission" className="text-foreground font-medium">
            Mission
          </Link>
          <Link href="#portfolio" className="text-foreground font-medium">
            Portfolio
          </Link>
          <Link href="#team" className="text-foreground font-medium">
            Team
          </Link>
          <Link href="#partners" className="text-foreground font-medium">
            Partners
          </Link>
        </div>
        <Button
          radius="full"
          size="lg"
          color="secondary"
          className="px-[22px] md:px-[44px] font-bold"
          as={Link}
          href="/#cta"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};
