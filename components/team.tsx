import TeamCard from "./team-card";

const members = [
  {
    name: "Mark Attar",
    description: "Full-Stack Engineer",
    linkedin: "https://www.linkedin.com/in/mark-attar/",
    image: "/team/headshot-Mark.jpeg",
  },
  {
    name: "James Njoroge",
    description: "Backend Engineer",
    linkedin: "https://www.linkedin.com/in/james-ngugi-njoroge/",
    image: "/team/headshot-James.png",
  },
  {
    name: "Nick Kang",
    description: "Project Manager",
    linkedin: "https://www.linkedin.com/in/dongkyun-kang/",
    image: "/team/headshot-Nick.jpeg",
  },
  {
    name: "Noah Saint Surin",
    description: "Backend Engineer",
    linkedin: "https://www.linkedin.com/in/nsaintsurin/",
    image: "/team/headshot-Noah.jpeg",
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
