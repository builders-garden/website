import { Project } from "@/types";

export enum FILTER {
  ALL = "All",
  INTERNAL = "Internal products",
  EXTERNAL = "External products",
  //HACKATHONS = "Hackathons",
}

export const PROJECTS: Project[] = [
  {
    name: "Farville",
    slug: "farville",
    description:
      "A Farcaster frame game where you can plant, grow and harvest crop with your internet frens.",
    color: "#CCCCCC",
    image: "/projects/farville.png",
    type: FILTER.INTERNAL,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://farville.farm",
      },
      {
        icon: "/icons/farcaster-white.svg",
        name: "Farcaster",
        url: "https://farcaster.xyz/miniapps/WoLihpyQDh7w/farville",
      },
    ],
  },
  {
    name: "ACID TEST",
    slug: "acid-test",
    description:
      "A Farcaster frame radio show bringing music, conversation and creative energy to Farcaster.",
    color: "#CCCCCC",
    image: "/projects/stringz.png",
    type: FILTER.EXTERNAL,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://app.acidtest.xyz/",
      },
      {
        icon: "/icons/farcaster-white.svg",
        name: "Farcaster",
        url: "https://farcaster.xyz/miniapps/fTRKM7quo7RZ/acid-test",
      },
    ],
  },
  {
    name: "Betttr",
    slug: "betttr",
    description:
      "A Farcaster frame sports prediction market. Bet, prove your skills, and earn.",
    color: "#CCCCCC",
    image: "/projects/betttr.png",
    type: FILTER.INTERNAL,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://betttr.xyz",
      },
      {
        icon: "/icons/farcaster-white.svg",
        name: "Farcaster",
        url: "https://farcaster.xyz/miniapps/3d_l4HanGz-0/betttr",
      },
    ],
  },
  // {
  //   name: "Farshot",
  //   slug: "farshot",
  //   description:
  //     "A Farcaster frame chance-based game where players can wager with different risk-reward multipliers",
  //   color: "#CCCCCC",
  //   image: "/projects/farshot.png",
  //   type: FILTER.EXTERNAL,
  //   links: [
  //     {
  //       icon: "/icons/dribble.svg",
  //       name: "Website",
  //       url: "https://farshot.vercel.app",
  //     },
  //     {
  //       icon: "/icons/farcaster-white.svg",
  //       name: "Farcaster",
  //       url: "https://farcaster.xyz/miniapps/3d_l4HanGz-0/farshot",
  //     },
  //   ],
  // },
  {
    name: "Drift",
    slug: "drift",
    description:
      "Stablecoin-native POS and payment gateway with automatic offramps.",
    color: "#6C3BF5",
    image: "/projects/drift.png",
    type: FILTER.INTERNAL,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://drift.money/",
      },
      {
        icon: "/icons/twitter-white.svg",
        name: "Drift Twitter",
        url: "https://x.com/drift_money",
      },
    ],
  },
  {
    name: "OD Passport",
    slug: "od-passport",
    description: "A digital passport for community attestations.",
    color: "#CCCCCC",
    image: "/projects/od-passport.png",
    type: FILTER.EXTERNAL,
    links: [
      {
        icon: "/icons/youtube-white.svg",
        name: "YouTube Demo",
        url: "https://www.youtube.com/watch?v=IzBVjqCzVp8",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/builders-garden/od-passport-app",
      },
    ],
  },
  {
    name: "Zuland",
    slug: "zuland",
    description:
      "Token-gated and encrypted social spaces for ZuVillages built on top of Akasha.",
    color: "#CCCCCC",
    image: "/projects/zuland.png",
    type: FILTER.EXTERNAL,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://www.zuzalu.city/",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/builders-garden/ZuzaluCityOS",
      },
    ],
  },
  {
    name: "Stringz",
    slug: "stringz",
    description:
      "A Farcaster client focused on Reddit-style long conversations.",
    color: "#6C3BF5",
    image: "/projects/stringz.png",
    type: FILTER.INTERNAL,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://stringz.xyz",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/builders-garden/stringz",
      },
    ],
  },
];
