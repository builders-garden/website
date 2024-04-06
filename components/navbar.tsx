import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export const NavbarComponent = () => {
  return (
    <div className="fixed w-full p-5 hidden md:block z-10">
      <div className="rounded-[120px] px-5 py-3 bg-gradient-to-tr from-[#171717] to-[#0E0E0E] justify-between items-center hidden md:flex z-[100]">
        <Image
          src={"/sloop-logo.svg"}
          height={50}
          width={158}
          alt="Sloop logo"
        />
        <div className="flex gap-8">
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
          color="primary"
          className="w-44 font-bold"
          as={Link}
          href="mailto:mattar@colgate.edu"
        >
          Contact us
        </Button>
      </div>
    </div>
  );
};
