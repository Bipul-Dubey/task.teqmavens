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
