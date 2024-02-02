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
    description: "Serial Hacker",
    twitter: "https://twitter.com/limone_eth",
    farcaster: "https://warpcast.com/limone.eth",
    image: "/team/limone.png",
  },
  {
    name: "orbulo",
    description: "Full Stack Developer",
    twitter: "https://twitter.com/orbuloeth",
    image: "/team/orbulo.jpg",
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
          We are builders our own
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
