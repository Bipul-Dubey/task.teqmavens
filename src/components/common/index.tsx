import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Customer({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-6 w-6">
        <AvatarImage
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
        />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <span className="text-sm text-foreground">{name}</span>
    </div>
  );
}

export function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="p-2 border-2 rounded-[6px] bg-b-background max-w-fit max-h-fit">
      <Image height={20} width={45} src={src} alt={alt} />
    </div>
  );
}
