import TeamCard from "./team-card";

const members = [
  // {
  //   name: "Mattia Pomelli",
  //   description: "Blockchain Developer",
  //   twitter: "",
  //   image: "/team/limone.png",
  // },
  {
    name: "Francesco Cirulli",
    description: "Blockchain Developer",
    twitter: "https://twitter.com/Frankc_eth",
    image: "/team/frank.jpg",
  },
  {
    name: "Paolo Rollo",
    description: "Full Stack Developer",
    twitter: "https://twitter.com/orbuloeth",
    image: "/team/orbulo.jpg",
  },
  {
    name: "Simone Staffa",
    description: "Blockchain Developer",
    twitter: "https://twitter.com/limone_eth",
    image: "/team/limone.png",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 flex flex-col px-16">
      <div className="flex flex-col gap-y-4">
        <h3 className="text-secondary font-bold text-2xl">Team</h3>
        <h2 className="font-clash-display text-7xl">We are builders our own</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20 place-items-center">
          {members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
