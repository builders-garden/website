import HackathonCard, { Hackathon } from "./hackathon-card";

const hackathons: Hackathon[] = [
  {
    name: "espresso",
    image: "/hackathons/espresso.svg",
    description:
      "iPad app that helps merchant setting up their shop and start accepting payments in crypto.",
    color: "#FFFF",
    link: "https://espresso.builders.garden",
    hackathon: "ETHBucharest 2024",
  },
  {
    name: "fluidpay",
    image: "/hackathons/fluidpay.svg",
    description: "Stealth P2P payments web-app built on Base with USDC.",
    color: "#1851FA",
    link: "https://ethglobal.com/showcase/fluidpay-tpqvz",
    hackathon: "ETHGlobal London 2024",
  },
  {
    name: "Papabase",
    image: "/hackathons/papabase.svg",
    description:
      "Making public goods donations accessible to everyone through crypto and fiat.",
    color: "#1851FA",
    link: "https://devfolio.co/projects/papabase-7d6b",
    hackathon: "ETHDenver 2024",
  },
  {
    name: "Ghost",
    image: "/hackathons/ghost.svg",
    description:
      "A mobile-native GHO-centric smart wallet designed for p2p payments",
    color: "#C9B3F9",
    link: "https://ethglobal.com/showcase/ghost-mae3q",
    hackathon: "ETHGlobal LFGHO Online 2024",
  },
  {
    name: "Pulse",
    image: "/hackathons/pulse.svg",
    description: "Tinder-like experience for Lens and Farcaster posts",
    color: "#1D91E3",
    link: "https://ethglobal.com/showcase/pulse-v4iir",
    hackathon: "ETHGlobal Istanbul 2023",
  },
  {
    name: "Split3",
    image: "/hackathons/split3.svg",
    description:
      "The easiest and safest way to split group expenses with crypto",
    color: "#2CAF49",
    link: "https://devpost.com/software/split3",
    hackathon: "ETHWarsaw 2023",
  },
];

export default function Hackathons() {
  return (
    <section id="portfolio" className="py-28 flex flex-col">
      <div className="flex flex-col items-center gap-y-4">
        <h3 className="text-secondary font-bold text-2xl">Hackathons</h3>
        <h2 className="font-clash-display text-5xl md:text-7xl">
          Everywhere we go, we hack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 md:pt-20 px-6">
          {hackathons.map((project) => (
            <HackathonCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
