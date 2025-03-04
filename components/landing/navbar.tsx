"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button as NextUIButton } from "@nextui-org/button";
import { Link as NextUILink } from "@nextui-org/link";
import { MENU_LINKS } from "@/components/menu-links";
import { MobileMenu } from "@/components/landing/mobile-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <section className="fixed inset-x-0 top-0 z-40 py-4 px-5">
      <div className="flex w-full items-center justify-center text-center py-4">
        <nav className="hidden rounded-[120px] w-full px-5 py-3 bg-gradient-to-tr from-[#171717] to-[#0E0E0E] justify-between lg:flex">
          <div className="flex items-center gap-x-9">
            <Link href="/" className="flex items-center gap-2">
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
          </div>
          <div className="flex items-center">
            <NavigationMenu
              style={
                {
                  ["--radius"]: "1rem",
                } as React.CSSProperties
              }
            >
              <NavigationMenuList>
                {MENU_LINKS.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      asChild
                      active={pathname.startsWith(item.href || "")}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "rounded-xl text-[15px] font-normal data-[active]:bg-accent bg-transparent"
                      )}
                    >
                      <Link
                        href={item.href || "#"}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-2">
            <NextUIButton
              radius="full"
              size="lg"
              color="secondary"
              className="px-[22px] md:px-[44px] font-bold"
              as={NextUILink}
              href="/#cta"
            >
              Get Started
            </NextUIButton>
          </div>
        </nav>
        <MobileMenu className="lg:hidden" />
      </div>
    </section>
  );
}
