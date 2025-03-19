export enum FILTER {
  ALL = "All",
  INTERNAL = "Internal products",
  EXTERNAL = "External products",
  //HACKATHONS = "Hackathons",
}

export const PROJECTS = [
  {
    name: "Drift",
    slug: "drift",
    description: "Stablecoin-native POS and payment gateway with automatic offramps.",
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
        name: "Stringz Twitter",
        url: "https://x.com/drift_money",
      }
    ],
  },
  {
    name: "Stringz",
    slug: "stringz",
    description:
      "A Farcaster client focused on enhanced content experience and long conversations.",
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
  {
    name: "OD Passport",
    slug: "od-passport",
    description: "A digital passport for community attestations.",
    color: "#CCCCCC",
    image: "/projects/od-passport.png",
    type: FILTER.EXTERNAL,
    links: [],
  },
  {
    name: "Betttr",
    slug: "betttr",
    description: "A Farcaster frame sports prediction market. Bet, prove your skills, and earn.",
    color: "#CCCCCC",
    image: "/projects/betttr.png",
    type: FILTER.INTERNAL,
    links: [
        {
          icon: "/icons/dribble.svg",
          name: "Website",
          url: "https://betttr.xyz",
        }
      ],
  },
  {
    name: "Zuland",
    slug: "zuland",
    description: "Token-gated and encrypted social spaces for ZuVillages built on top of Akasha.",
    color: "#CCCCCC",
    image: "/projects/zuland.png",
    type: FILTER.EXTERNAL,
    links: [],
  },
  {
    name: "Farville",
    slug: "farville",
    description: "A Farcaster frame game where you can plant, grow and harvest crop with your internet frens.",
    color: "#CCCCCC",
    image: "/projects/farville.png",
    type: FILTER.INTERNAL,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://farville.farm",
      },
    ],
  },
  {
    name: "ACID TEST",
    slug: "acid-test",
    description: "A Farcaster frame used by ACID TEST artist for releasing its new songs as NFTs.",
    color: "#CCCCCC",
    image: "/projects/stringz.png",
    type: FILTER.EXTERNAL,
    links: [],
  },
  {
    name: "Farshot",
    slug: "farshot",
    description: "A Farcaster frame chance-based game where players can wager with different risk-reward multipliers",
    color: "#CCCCCC",
    image: "/projects/stringz.png",
    type: FILTER.EXTERNAL,
    links: [],
  },
  {
    name: "Coin Toss",
    slug: "coin-toss",
    description: "A Farcaster frame game on XMTP for small bets with your frens.",
    color: "#CCCCCC",
    image: "/projects/stringz.png",
    type: FILTER.EXTERNAL,
    links: [],
  },

];
