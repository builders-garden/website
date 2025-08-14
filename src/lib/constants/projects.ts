import { Project } from "@/types";

export enum PROJECT_TAG {
  ALL = "All",
  INTERNAL = "Internal project",
  EXTERNAL = "Contractor project",
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
  STABLECOINS = "Stablecoins",
  MERCHANT = "Merchant",
  CROSS_CHAIN = "Cross-chain",
  HEALTH = "Health",
  FITNESS = "Fitness",
  NEWS = "News",
}

export const PROJECTS: Project[] = [
  {
    name: "Farville",
    slug: "farville",
    description:
      "A Farcaster mini-app game where you can plant, grow and harvest crop with your internet frens.",
    markdownPath: "content/farville.mdx",
    color: "#CCCCCC",
    image: "/projects/farville/preview.png",
    bannerImage: "/projects/farville/hero.jpg",
    screenshotUrls: [
      {
        url: "/projects/farville/1.png",
        alt: "Farville onboarding",
        text: "1. Farville user onboarding flow",
        width: 1080,
        height: 1920,
      },
      {
        url: "/projects/farville/2.png",
        alt: "Farville ranking",
        text: "2. Farville global rankings",
        width: 1080,
        height: 1920,
      },
      {
        url: "/projects/farville/3.png",
        alt: "Farville streak",
        text: "3. Farville daily streak",
        width: 1080,
        height: 1920,
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
        icon: "/icons/farcaster.svg",
        name: "Farcaster",
        url: "https://farcaster.xyz/miniapps/WoLihpyQDh7w/farville",
      },
    ],
  },
  {
    name: "RevU",
    slug: "revu",
    description:
      "A Farcaster mini-app for TBA where you can create and share your own RevU.",
    markdownPath: "content/revu.mdx",
    color: "#6C3BF5",
    image: "/projects/revu/preview.png",
    tags: [PROJECT_TAG.EXTERNAL, PROJECT_TAG.MOVIES],
    homepage: true,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://revu.decentralized.pictures",
      },
      {
        icon: "/icons/farcaster.svg",
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
    markdownPath: "content/checkmates.mdx",
    color: "#6C3BF5",
    image: "/projects/checkmates/preview.png",
    tags: [PROJECT_TAG.EXTERNAL, PROJECT_TAG.GAME, PROJECT_TAG.BETS],
    homepage: true,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://checkmat.es",
      },
      {
        icon: "/icons/farcaster.svg",
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
    markdownPath: "content/drift.mdx",
    color: "#6C3BF5",
    image: "/projects/drift/preview.png",
    tags: [PROJECT_TAG.INTERNAL, PROJECT_TAG.PAYMENTS, PROJECT_TAG.STABLECOINS],
    homepage: true,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://drift.money/",
      },
      {
        icon: "/icons/twitter.svg",
        name: "Drift Twitter",
        url: "https://x.com/drift_money",
      },
    ],
  },
  {
    name: "Eco",
    slug: "eco",
    description:
      "A checkout app for merchants that leverages Eco's cross-chain stablecoins payment technology.",
    markdownPath: "content/eco.mdx",
    color: "#325691",
    image: "/projects/eco/preview.png",
    screenshotUrls: [
      {
        url: "/projects/eco/1.png",
        alt: "Eco Checkout payment details",
        text: "1. Eco checkout payment details selection",
        width: 1920,
        height: 1080,
      },
      {
        url: "/projects/eco/2.png",
        alt: "Eco Checkout connect wallet",
        text: "2. Eco checkout wallet connection",
        width: 1920,
        height: 1080,
      },
      {
        url: "/projects/eco/3.png",
        alt: "Eco Checkout tokens found",
        text: "3. Tokens found in the user's wallet",
        width: 1920,
        height: 1080,
      },
    ],
    tags: [
      PROJECT_TAG.EXTERNAL,
      PROJECT_TAG.PAYMENTS,
      PROJECT_TAG.STABLECOINS,
      PROJECT_TAG.MERCHANT,
      PROJECT_TAG.CROSS_CHAIN,
    ],
    homepage: true,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://www.ecocheckout.xyz/",
      },
    ],
  },
  {
    name: "Griv",
    slug: "griv",
    description: "Griv - For the ones that show up.",
    markdownPath: "content/griv.mdx",
    color: "#1E1E1E",
    image: "/projects/griv/preview.png",
    bannerImage: "/projects/griv/hero.png",
    tags: [
      PROJECT_TAG.EXTERNAL,
      PROJECT_TAG.SOCIAL,
      PROJECT_TAG.HEALTH,
      PROJECT_TAG.FITNESS,
      PROJECT_TAG.SPORTS,
      PROJECT_TAG.LEADERBOARDS,
    ],
    homepage: true,
    screenshotUrls: [
      {
        url: "/projects/griv/1.jpg",
        alt: "Griv Camera",
        text: "1. Shoot your commitment",
        width: 1080,
        height: 1920,
      },
      {
        url: "/projects/griv/2.jpg",
        alt: "Griv Profile",
        text: "2. Explore your profile",
        width: 1080,
        height: 1920,
      },
      {
        url: "/projects/griv/3.jpg",
        alt: "Griv Leaderboard",
        text: "3. Compete",
        width: 1080,
        height: 1920,
      },
    ],
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://griv.gg",
      },
      {
        icon: "/icons/farcaster.svg",
        name: "Farcaster",
        url: "https://farcaster.xyz/miniapps/KtCKyy4lk104/griv",
      },
      {
        icon: "/icons/twitter.svg",
        name: "Twitter",
        url: "https://x.com/grivapp",
      },
    ],
  },
  {
    name: "UFO.fm",
    slug: "ufo",
    description: "A Farcaster mini-app with UFO.fm open internet radio.",
    markdownPath: "content/ufo.mdx",
    color: "#6C3BF5",
    image: "/projects/ufo/preview.png",
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
        icon: "/icons/farcaster.svg",
        name: "Farcaster",
        url: "https://farcaster.xyz/miniapps/0r6DJZlzhP-D/ufo",
      },
      {
        icon: "/icons/twitter.svg",
        name: "Twitter",
        url: "https://x.com/ufo__club",
      },
    ],
  },
  {
    name: "ACID TEST",
    slug: "acid-test",
    description:
      "An onchain radio show bringing music, conversation and creative energy to Farcaster.",
    markdownPath: "content/acid-test.mdx",
    color: "#000000",
    image: "/projects/acid-test/preview.png",
    bannerImage: "/projects/acid-test/hero.jpg",
    tags: [
      PROJECT_TAG.EXTERNAL,
      PROJECT_TAG.RADIO,
      PROJECT_TAG.MUSIC,
      PROJECT_TAG.PODCASTS,
    ],
    homepage: false,
    screenshotUrls: [
      {
        url: "/projects/acid-test/1.jpg",
        alt: "Acid Test Episodes",
        text: "1. Browse the weekly episodes",
        width: 1080,
        height: 1920,
      },
      {
        url: "/projects/acid-test/2.jpg",
        alt: "Acid Test player",
        text: "2. Listen to episodes",
        width: 1080,
        height: 1920,
      },
      {
        url: "/projects/acid-test/3.jpg",
        alt: "Acid Test collectors",
        text: "3. View collectors and mint statistics",
        width: 1080,
        height: 1920,
      },
    ],
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://app.acidtest.xyz/",
      },
      {
        icon: "/icons/farcaster.svg",
        name: "Farcaster",
        url: "https://farcaster.xyz/miniapps/fTRKM7quo7RZ/acid-test",
      },
      {
        icon: "/icons/twitter.svg",
        name: "Twitter",
        url: "https://x.com/acid____test",
      },
    ],
  },
  {
    name: "Betttr",
    slug: "betttr",
    description:
      "A Farcaster mini-app sports prediction market. Bet, prove your skills, and earn.",
    markdownPath: "content/betttr.mdx",
    color: "#CCCCCC",
    image: "/projects/betttr/preview.png",
    tags: [PROJECT_TAG.INTERNAL, PROJECT_TAG.SPORTS, PROJECT_TAG.BETS],
    homepage: false,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://betttr.xyz",
      },
      {
        icon: "/icons/farcaster.svg",
        name: "Farcaster",
        url: "https://farcaster.xyz/miniapps/3d_l4HanGz-0/betttr",
      },
    ],
  },
  {
    name: "OD Passport",
    slug: "od-passport",
    description: "A digital passport for community attestations.",
    markdownPath: "content/od-passport.mdx",
    color: "#CCCCCC",
    image: "/projects/od-passport/preview.png",
    tags: [PROJECT_TAG.EXTERNAL, PROJECT_TAG.OTHER, PROJECT_TAG.PRIVACY],
    homepage: false,
    links: [
      {
        icon: "/icons/youtube.svg",
        name: "YouTube Demo",
        url: "https://www.youtube.com/watch?v=IzBVjqCzVp8",
      },
      {
        icon: "/icons/github.svg",
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
    markdownPath: "content/zuland.mdx",
    color: "#CCCCCC",
    image: "/projects/zuland/preview.png",
    tags: [PROJECT_TAG.EXTERNAL, PROJECT_TAG.SOCIAL, PROJECT_TAG.PRIVACY],
    homepage: false,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://www.zuzalu.city/",
      },
      {
        icon: "/icons/github.svg",
        name: "Github",
        url: "https://github.com/builders-garden/Zuzalu-City",
      },
    ],
  },
  {
    name: "Stringz",
    slug: "stringz",
    description:
      "A Farcaster client focused on Reddit-style long conversations.",
    markdownPath: "content/stringz.mdx",
    color: "#6C3BF5",
    image: "/projects/stringz/preview.png",
    tags: [PROJECT_TAG.INTERNAL, PROJECT_TAG.SOCIAL],
    homepage: false,
    links: [
      {
        icon: "/icons/github.svg",
        name: "Github",
        url: "https://github.com/builders-garden/stringz",
      },
    ],
  },
  // {
  //   name: "Ethereum Daily",
  //   slug: "eth-daily",
  //   description:
  //     "A mini app where users read daily articles and take quizzes to earn rewards.",
  //   markdownPath: "content/eth-daily.mdx",
  //   color: "#627EEA",
  //   image: "/projects/eth-daily/preview.png",
  //   bannerImage: "/projects/eth-daily/hero.jpg",
  //   screenshotUrls: [
  //     {
  //       url: "/projects/eth-daily/1.jpg",
  //       alt: "Ethereum Daily Home",
  //       text: "1. Check the rewards and read the article",
  //       width: 1080,
  //       height: 1920,
  //     },
  //     {
  //       url: "/projects/eth-daily/2.jpg",
  //       alt: "Ethereum Daily Quiz",
  //       text: "2. Answer the quiz questions",
  //       width: 1080,
  //       height: 1920,
  //     },
  //     {
  //       url: "/projects/eth-daily/3.jpg",
  //       alt: "Ethereum Daily Quiz Results",
  //       text: "3. Earn rewards based on your performance",
  //       width: 1080,
  //       height: 1920,
  //     },
  //   ],
  //   tags: [PROJECT_TAG.EXTERNAL, PROJECT_TAG.GAME, PROJECT_TAG.NEWS],
  //   homepage: false,
  //   links: [
  //     {
  //       icon: "/icons/dribble.svg",
  //       name: "Website",
  //       url: "https://paragraph.com/@ethereumdaily",
  //     },
  //     {
  //       icon: "/icons/farcaster.svg",
  //       name: "Farcaster",
  //       url: "https://farcaster.xyz/ethereumdaily.eth",
  //     },
  //     {
  //       icon: "/icons/twitter.svg",
  //       name: "Twitter",
  //       url: "https://x.com/EthereumDaily_",
  //     },
  //   ],
  // },
];
