import { Project } from "@/types";

export enum PROJECT_TAG {
  ALL = "All",
  INTERNAL = "Internal product",
  EXTERNAL = "External product",
  SPORTS = "Sports",
  LEADERBOARDS = "Leaderboards",
  GAME = "Game",
  MUSIC = "Music",
  PODCASTS = "Podcasts",
  MOVIES = "Movies",
  LIVESTREAMS = "Livestreams",
  RADIO = "Radio",
  PAYMENTS = "Payments",
  SOCIAL = "Social",
  PRIVACY = "Privacy",
  BETS = "Bets",
  OTHER = "Other",
}

export const PROJECTS: Project[] = [
  {
    name: "Farville",
    slug: "farville",
    description:
      "A Farcaster mini-app game where you can plant, grow and harvest crop with your internet frens.",
    longDescription:
      "Farville is a Farcaster mini-app game where you can <b>plant</b>, <b>grow</b> and <b>harvest</b> crop with your internet frens.\n\nSIUM.",
    color: "#CCCCCC",
    image: "/projects/farville.png",
    bannerImage: "/projects/farville/hero.jpg",
    screenshotUrls: [
      {
        url: "/projects/farville/1.png",
        alt: "Farville onboarding",
        text: "1. Farville user onboarding flow",
      },
      {
        url: "/projects/farville/2.png",
        alt: "Farville ranking",
        text: "2. Farville global rankings",
      },
      {
        url: "/projects/farville/3.png",
        alt: "Farville streak",
        text: "3. Farville daily streak",
      },
    ],
    tags: [PROJECT_TAG.INTERNAL, PROJECT_TAG.GAME, PROJECT_TAG.LEADERBOARDS],
    homepage: true,
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
      {
        icon: "/icons/twitter-white.svg",
        name: "Twitter",
        url: "https://x.com/farville",
      },
    ],
  },
  {
    name: "RevU",
    slug: "revu",
    description:
      "A Farcaster mini-app for TBA where you can create and share your own RevU.",
    longDescription:
      "A Farcaster mini-app for TBA where you can create and share your own RevU.",
    color: "#6C3BF5",
    image: "/projects/revu-dcp.png",
    tags: [PROJECT_TAG.EXTERNAL, PROJECT_TAG.MOVIES],
    homepage: true,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://revu.decentralize.pictures",
      },
      {
        icon: "/icons/farcaster-white.svg",
        name: "Farcaster",
        url: "https://farcaster.xyz/miniapps/cdGXMlMJRvVm/revu",
      },
    ],
  },
  {
    name: "Checkmates",
    slug: "checkmates",
    description:
      "A Farcaster mini-app for TBA where you can create and share your own Checkmates.",
    longDescription:
      "A Farcaster mini-app for TBA where you can create and share your own Checkmates.",
    color: "#6C3BF5",
    image: "/projects/checkmates/icon.png",
    tags: [PROJECT_TAG.EXTERNAL, PROJECT_TAG.GAME, PROJECT_TAG.BETS],
    homepage: true,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://checkmat.es",
      },
      {
        icon: "/icons/farcaster-white.svg",
        name: "Farcaster",
        url: "https://farcaster.xyz/miniapps/ceoeKAzVgRwc/checkmates",
      },
    ],
  },
  {
    name: "Drift",
    slug: "drift",
    description:
      "Stablecoin-native POS and payment gateway with automatic offramps.",
    longDescription:
      "Stablecoin-native POS and payment gateway with automatic offramps.",
    color: "#6C3BF5",
    image: "/projects/drift.png",
    tags: [PROJECT_TAG.INTERNAL, PROJECT_TAG.PAYMENTS],
    homepage: true,
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
    name: "Eco",
    slug: "eco",
    description:
      "A Farcaster mini-app for TBA where you can create and share your own Eco.",
    longDescription:
      "A Farcaster mini-app for TBA where you can create and share your own Eco.",
    color: "#6C3BF5",
    image: "/projects/eco/icon.png",
    tags: [PROJECT_TAG.EXTERNAL, PROJECT_TAG.PAYMENTS],
    homepage: true,
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
    name: "Griv",
    slug: "griv",
    description:
      "A Farcaster mini-app for TBA where you can create and share your own Griv.",
    longDescription:
      "A Farcaster mini-app for TBA where you can create and share your own Griv.",
    color: "#6C3BF5",
    image: "/projects/griv.png",
    tags: [PROJECT_TAG.EXTERNAL, PROJECT_TAG.SPORTS, PROJECT_TAG.LEADERBOARDS],
    homepage: true,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://www.griv.gg",
      },
      {
        icon: "/icons/farcaster-white.svg",
        name: "Farcaster",
        url: "https://farcaster.xyz/miniapps/KtCKyy4lk104/griv",
      },
    ],
  },
  {
    name: "UFO.fm",
    slug: "ufo",
    description: "A Farcaster mini-app with UFO.fm open internet radio.",
    longDescription: "A Farcaster mini-app with UFO.fm open internet radio.",
    color: "#6C3BF5",
    image: "/projects/ufo/icon.png",
    tags: [
      PROJECT_TAG.EXTERNAL,
      PROJECT_TAG.RADIO,
      PROJECT_TAG.MUSIC,
      PROJECT_TAG.PODCASTS,
      PROJECT_TAG.LIVESTREAMS,
    ],
    homepage: true,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://ufo.fm/",
      },
      {
        icon: "/icons/farcaster-white.svg",
        name: "Farcaster",
        url: "https://farcaster.xyz/miniapps/0r6DJZlzhP-D/ufo",
      },
      {
        icon: "/icons/twitter-white.svg",
        name: "Twitter",
        url: "https://x.com/ufo__club",
      },
    ],
  },
  {
    name: "ACID TEST",
    slug: "acid-test",
    description:
      "A Farcaster mini-app radio show bringing music, conversation and creative energy to Farcaster.",
    longDescription:
      "A Farcaster mini-app radio show bringing music, conversation and creative energy to Farcaster.",
    color: "#CCCCCC",
    image: "/projects/acid-test.png",
    tags: [
      PROJECT_TAG.EXTERNAL,
      PROJECT_TAG.RADIO,
      PROJECT_TAG.MUSIC,
      PROJECT_TAG.PODCASTS,
    ],
    homepage: false,
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
      "A Farcaster mini-app sports prediction market. Bet, prove your skills, and earn.",
    longDescription:
      "A Farcaster mini-app sports prediction market. Bet, prove your skills, and earn.",
    color: "#CCCCCC",
    image: "/projects/betttr.png",
    tags: [PROJECT_TAG.INTERNAL, PROJECT_TAG.SPORTS, PROJECT_TAG.BETS],
    homepage: false,
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
  //     "A Farcaster mini-app chance-based game where players can wager with different risk-reward multipliers",
  //   longDescription:
  //     "A Farcaster mini-app chance-based game where players can wager with different risk-reward multipliers",
  //   color: "#CCCCCC",
  //   image: "/projects/farshot.png",
  //   tags: [PROJECT_TAG.EXTERNAL, PROJECT_TAG.GAME, PROJECT_TAG.BETS],
  //   homepage: false,
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
    name: "OD Passport",
    slug: "od-passport",
    description: "A digital passport for community attestations.",
    longDescription: "A digital passport for community attestations.",
    color: "#CCCCCC",
    image: "/projects/od-passport.png",
    tags: [PROJECT_TAG.EXTERNAL, PROJECT_TAG.OTHER],
    homepage: false,
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
    longDescription:
      "Token-gated and encrypted social spaces for ZuVillages built on top of Akasha.",
    color: "#CCCCCC",
    image: "/projects/zuland.png",
    tags: [PROJECT_TAG.EXTERNAL, PROJECT_TAG.SOCIAL, PROJECT_TAG.PRIVACY],
    homepage: false,
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
    longDescription:
      "A Farcaster client focused on Reddit-style long conversations.",
    color: "#6C3BF5",
    image: "/projects/stringz.png",
    tags: [PROJECT_TAG.INTERNAL, PROJECT_TAG.SOCIAL],
    homepage: false,
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
