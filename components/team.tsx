import TeamCard from "./team-card";

const members = [
  {
    name: "frank",
    description: "Blockchain Developer",
    twitter: "https://twitter.com/Frankc_eth",
    farcaster: "https://warpcast.com/frankk",
    image: "/team/frank.jpg",
  },
  {
    name: "limone",
    description: "Full Stack Developer",
    twitter: "https://twitter.com/limone_eth",
    farcaster: "https://warpcast.com/limone.eth",
    image: "/team/limone.png",
  },
  {
    name: "orbulo",
    description: "Full Stack Developer",
    twitter: "https://twitter.com/orbuloeth",
    farcaster: "https://warpcast.com/orbulo",
    image: "/team/orbulo.jpg",
  },
  {
    name: "darph",
    description: "UI/UX Designer",
    twitter: "https://twitter.com/vDarph",
    farcaster: "https://warpcast.com/darph",
    image: "/team/darph.png",
  },
  {
    name: "0xfraye",
    description: "Backend Developer",
    twitter: "https://twitter.com/mmidena23",
    farcaster: "https://warpcast.com/midenaeth",
    image: "/team/fraye.jpg",
  },
  {
    name: "bianc8",
    description: "Full Stack Developer",
    twitter: "https://twitter.com/bianc8_eth",
    farcaster: "https://warpcast.com/bianc8",
    image: "/team/bianc8.jpg",
  },
  {
    name: "six99",
    description: "Mobile and Frontend Developer",
    twitter: "https://twitter.com/AndreaFolino3",
    farcaster: "https://warpcast.com/six99",
    image: "/team/andrea.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-12 md:py-28 flex flex-col px-4 md:px-16">
      <div className="flex flex-col gap-y-4">
        <h3 className="text-secondary font-bold text-2xl text-center md:text-left">
          Team
        </h3>
        <h2 className="font-clash-display text-4xl md:text-7xl text-center md:text-left">
          We are builders ourselves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20 place-items-center">
          {members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
