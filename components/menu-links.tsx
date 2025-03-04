import * as React from "react";
import {
  BookOpenIcon,
  BoxIcon,
  CircuitBoardIcon,
  FileBarChartIcon,
  LayoutIcon,
  PlayIcon,
  SendIcon,
} from "lucide-react";

import {
  FarcasterIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/brand-icons";

export const MENU_LINKS = [
  {
    title: "Mission",
    href: "/#mission",
    external: false,
  },
  {
    title: "Services",
    href: "/#services",
    external: false,
  },
  {
    title: "Portfolio",
    href: "/#portfolio",
    external: false,
  },
  {
    title: "Team",
    href: "/#team",
    external: false,
  },
  {
    title: "Testimonials",
    href: "/#testimonials",
    external: false,
  },
  {
    title: "Bounties",
    href: "/#bounties",
    external: false,
  },
];

export const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { name: "Mission", href: "#mission", external: false },
      { name: "Portfolio", href: "#portfolio", external: false },
      { name: "Team", href: "#team", external: false },
      { name: "Partners", href: "#partners", external: false },
      { name: "Bounties", href: "#bounties", external: false },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    name: "X (formerly Twitter)",
    href: "https://x.com/buildersgarden",
    icon: <XIcon className="size-4 shrink-0" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/buildersgarden",
    icon: <LinkedInIcon className="size-4 shrink-0" />,
  },
  {
    name: "Farcaster",
    href: "https://warpcast.com/builders-garden",
    icon: <FarcasterIcon className="size-4 shrink-0" />,
  },
];
