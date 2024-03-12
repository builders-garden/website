import HackathonCard from "./hackathon-card";

export default function Hackathons() {
  return (
    <section id="portfolio" className="py-28 flex flex-col">
      <div className="flex flex-col items-center gap-y-4">
        <h3 className="text-secondary font-bold text-2xl">Hackathons</h3>
        <h2 className="font-clash-display text-5xl md:text-7xl">
          Everywhere we go, we hack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 md:pt-20 px-6">
          <HackathonCard
            project={{
              name: "Split3",
              image: "/hackathons/split3.svg",
              description:
                "The easiest and safest way to split group expenses with crypto",
              color: "#2CAF49",
              link: "https://devpost.com/software/split3",
              hackathon: "ETHWarsaw 2023",
            }}
          />
          <HackathonCard
            project={{
              name: "threelingo",
              image: "/hackathons/threelingo.svg",
              description: "The free, fun, and effective way to learn web3.",
              color: "#2F6EE7",
              link: "https://taikai.network/ethlisbon/hackathons/ethlisbon-2023/projects/clokh2kpz06z6xk01gl0c0ggn/idea",
              hackathon: "ETHLisbon 2023",
            }}
          />
          <HackathonCard
            project={{
              name: "Pulse",
              image: "/hackathons/pulse.svg",
              description:
                "Tinder-like experience for Lens and Farcaster posts",
              color: "#1D91E3",
              link: "https://ethglobal.com/showcase/pulse-v4iir",
              hackathon: "ETHGlobal Istanbul 2023",
            }}
          />
          <HackathonCard
            project={{
              name: "Ghost",
              image: "/hackathons/ghost.svg",
              description:
                "A mobile-native GHO-centric smart wallet designed for p2p payments",
              color: "#C9B3F9",
              link: "https://ethglobal.com/showcase/ghost-mae3q",
              hackathon: "ETHGlobal LFGHO Online 2024",
            }}
          />
          <HackathonCard
            project={{
              name: "Papabase",
              image: "/hackathons/papabase.svg",
              description:
                "Making public goods donations accessible to everyone through crypto and fiat.",
              color: "#1851FA",
              link: "https://devfolio.co/projects/papabase-7d6b",
              hackathon: "ETHDenver 2024",
            }}
          />
        </div>
      </div>
    </section>
  );
}
