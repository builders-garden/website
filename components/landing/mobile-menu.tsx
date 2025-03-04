"use client";

import * as React from "react";
import Link from "next/link";
import { Button as NextUIButton } from "@nextui-org/button";
import { Link as NextUILink } from "@nextui-org/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Portal } from "@radix-ui/react-portal";
import { motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";

import { MENU_LINKS } from "@/components/menu-links";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileMenu({
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleRouteChangeStart = () => {
      if (document.activeElement instanceof HTMLInputElement) {
        document.activeElement.blur();
      }

      setOpen(false);
    };

    handleRouteChangeStart();
  }, [pathname]);

  const handleChange = () => {
    const mediaQueryList = window.matchMedia("(min-width: 1024px)");
    setOpen((open) => (open ? !mediaQueryList.matches : false));
  };

  React.useEffect(() => {
    handleChange();
    const mediaQueryList = window.matchMedia("(min-width: 1024px)");
    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, []);

  const handleToggleMobileMenu = (): void => {
    setOpen((open) => !open);
  };

  return (
    <>
      <div className="fixed flex w-full px-5 z-10">
        <div
          className={cn(
            "w-full rounded-[120px] px-5 py-2 mt-3 bg-gradient-to-tr from-[#171717] to-[#0E0E0E] flex items-center justify-between",
            className
          )}
          {...other}
        >
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={handleToggleMobileMenu}
          >
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
          <Button
            variant="ghost"
            size="icon"
            aria-expanded={open}
            aria-label="Toggle Mobile Menu"
            onClick={handleToggleMobileMenu}
            className="flex aspect-square h-fit select-none flex-col items-center justify-center rounded-full"
          >
            <motion.div
              className="w-5 origin-center border-t-2 border-primary"
              initial={{ translateY: "0px" }}
              animate={
                open
                  ? { rotate: "45deg", translateY: "6px" }
                  : { rotate: "0deg", translateY: "0px" }
              }
              transition={{ bounce: 0, duration: 0.1 }}
            />
            <motion.div
              className="w-5 origin-center border-t-2 border-primary"
              transition={{ bounce: 0, duration: 0.1 }}
              initial={{ translateY: "0px" }}
              animate={
                open
                  ? { rotate: "-45deg", translateY: "-4px" }
                  : { rotate: "0deg", translateY: "0px", scaleX: 1 }
              }
            />
          </Button>
        </div>
      </div>
      {open && (
        <Portal asChild>
          <RemoveScroll allowPinchZoom enabled>
            <MainMobileMenu onLinkClicked={handleToggleMobileMenu} />
          </RemoveScroll>
        </Portal>
      )}
    </>
  );
}

type MainMobileMenuProps = {
  onLinkClicked: () => void;
};

function MainMobileMenu({
  onLinkClicked,
}: MainMobileMenuProps): React.JSX.Element {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});
  return (
    <div className="fixed inset-0 z-50 mt-[69px] overflow-y-auto bg-background animate-in fade-in-0">
      <div className="flex size-full flex-col items-start space-y-3 p-4">
        <div className="flex w-full flex-col gap-2">
          <NextUIButton
            radius="full"
            size="lg"
            color="secondary"
            className="px-[22px] md:px-[44px] font-bold"
            as={NextUILink}
            href="/#cta"
            onClick={onLinkClicked}
          >
            Get Started
          </NextUIButton>
        </div>
        <ul className="w-full">
          {MENU_LINKS.map((item) => (
            <li key={item.title} className="py-2">
              <Link
                href={item.href || "#"}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full justify-start"
                )}
                onClick={onLinkClicked}
              >
                <span className="text-base">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
