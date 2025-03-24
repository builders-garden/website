export enum FILTER {
  ALL = "All",
  INTERNAL = "Internal products",
  EXTERNAL = "External products",
  HACKATHONS = "Hackathons",
}

export const PROJECTS = [
  {
    name: "Farville",
    slug: "farville",
    description: "Plant, grow and harvest crop with your internet frens. A Farcaster frame game.",
    color: "#CCCCCC",
    image: "/projects/farville.jpg",
    type: FILTER.HACKATHONS,
    links: [],
  },
  {
    name: "Betttr",
    slug: "betttr",
    description: "A social sports betting and prediction market Farcaster frame. Bet, prove your skills, and earn.",
    color: "#CCCCCC",
    image: "/projects/betttr.png",
    type: FILTER.HACKATHONS,
    links: [],
  },
  {
    name: "Farshot",
    slug: "farshot",
    description: "A chance-based Farcaster frame game where players can wager ETH withh different risk-reward multipliers",
    color: "#CCCCCC",
    image: "/projects/farshot.png",
    type: FILTER.HACKATHONS,
    links: [],
  },
  {
    name: "ACID TEST",
    slug: "acid-test",
    description: "A Farcaster frame used by ACID TEST artist for releasing their new songs.",
    color: "#CCCCCC",
    image: "/projects/acid-test.png",
    type: FILTER.HACKATHONS,
    links: [],
  },
  {
    name: "Coin Toss",
    slug: "coin-toss",
    description: "Placeholder description for Coin Toss.",
    color: "#CCCCCC",
    image: "/projects/placeholder.svg",
    type: FILTER.HACKATHONS,
    links: [],
  },
  {
    name: "Zuland",
    slug: "zuland",
    description: "Token-gated and encrypted social spaces for ZuVillages built on top of Akasha.",
    color: "#CCCCCC",
    image: "/projects/placeholder.svg",
    type: FILTER.HACKATHONS,
    links: [],
  },
  {
    name: "Onchain Dreamers",
    slug: "onchain-dreamers",
    description: "A digital passport for community attestations.",
    color: "#CCCCCC",
    image: "/projects/placeholder.svg",
    type: FILTER.HACKATHONS,
    links: [],
  },
  {
    name: "Stringz",
    slug: "stringz",
    description:
      "Rapid prototype development to test your ideas in the market quickly and efficiently",
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
        icon: "/icons/twitter-white.svg",
        name: "Stringz Twitter",
        url: "https://x.com/stringz_xyz",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/stringz-xyz",
      },
    ],
  },
  {
    name: "Drift",
    slug: "drift",
    description: "Stablecoin-native POS and payment gateway with automatic offramps.",
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
        icon: "/icons/twitter-white.svg",
        name: "Stringz Twitter",
        url: "https://x.com/stringz_xyz",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/stringz-xyz",
      },
    ],
  },
  
];
