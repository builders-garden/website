export enum FILTER {
  ALL = "All",
  INTERNAL = "Internal products",
  PARTNERSHIPS = "Partnerships",
  HACKATHONS = "Hackathons",
}

export const PROJECTS = [
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
    name: "Ghost",
    slug: "ghost",
    description:
      "A mobile-native GHO-centric smart wallet designed for p2p payments",
    color: "#C9B3F9",
    image: "/projects/ghost.svg",
    type: FILTER.HACKATHONS,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://ethglobal.com/showcase/ghost-mae3q",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/builders-garden/ghost-app",
      },
    ],
  },
  {
    name: "Papabase",
    slug: "papabase",
    description:
      "Making public goods donations accessible to everyone through crypto and fiat.",
    color: "#1851FA",
    image: "/projects/papabase.svg",
    type: FILTER.HACKATHONS,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://devfolio.co/projects/papabase-7d6b",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/builders-garden/papabase",
      },
    ],
  },
  {
    name: "Pulse",
    slug: "pulse",
    description: "Tinder-like experience for Lens and Farcaster posts",
    color: "#1D91E3",
    image: "/projects/pulse.svg",
    type: FILTER.HACKATHONS,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://ethglobal.com/showcase/pulse-v4iir",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/PaoloRollo/pulse",
      },
    ],
  },
  {
    name: "Split3",
    slug: "split3",
    description:
      "The easiest and safest way to split group expenses with crypto",
    color: "#2CAF49",
    image: "/projects/split3.svg",
    type: FILTER.HACKATHONS,
    links: [
      {
        icon: "/icons/dribble.svg",
        name: "Website",
        url: "https://devpost.com/software/split3",
      },
      {
        icon: "/icons/github-white.svg",
        name: "Github",
        url: "https://github.com/mattiapomelli/split3-frontend",
      },
    ],
  },
];
