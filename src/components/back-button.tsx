import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BackButton = ({ link }: { link: string }) => {
  return (
    <Link href={link}>
      <Button variant="outline" className="my-2 sm:my-4">
        <ArrowLeftIcon className="w-4 h-4" />
        <span className="">Back </span>
      </Button>
    </Link>
  );
};
