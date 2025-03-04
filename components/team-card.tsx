import { Link } from "@nextui-org/link";
import Image from "next/image";

type Member = {
  name: string;
  description: string;
  twitter: string;
  farcaster?: string;
  url?: string;
  image: string;
};

export default function TeamCard({ member }: { member: Member }) {
  return (
    <div className="w-full rounded-full h-[442px] w-[304px] bg-gradient-to-tr from-[#171717] to-[#0E0E0E] flex flex-col items-center p-5 gap-y-6">
      <Image
        src={member.image}
        height={264}
        width={264}
        alt={member.name}
        className="w-[264px] h-[264px] rounded-full object-cover"
      />
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold">{member.name}</h3>
        <h4>{member.description}</h4>
      </div>

      <div className="flex flex-row items-center gap-2">
        <Link href={member.twitter} isExternal>
          <Image
            src={"/icons/twitter.svg"}
            height={24}
            width={24}
            alt={"Twitter logo"}
          />
        </Link>
        {member.farcaster && (
          <Link href={member.farcaster} isExternal>
            <Image
              src={"/icons/farcaster.svg"}
              height={18}
              width={18}
              color="#222222"
              alt={"Farcaster logo"}
            />
          </Link>
        )}
        {member.url && (
          <Link href={member.url} isExternal>
            <Image
              src={"/icons/dribble.svg"}
              height={18}
              width={18}
              color="#222222"
              alt={"Personal website logo"}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
