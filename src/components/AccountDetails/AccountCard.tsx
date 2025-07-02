import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AccountCard() {
  return (
    <div className="flex items-start justify-between w-full max-w-96 rounded-xl border bg-b-background p-4 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Avatar className="h-12 w-12 text-sm font-semibold bg-muted">
            <AvatarFallback className="p-2 bg-purple-400">TG</AvatarFallback>
          </Avatar>

          {/* Online Dot */}
          <span className="absolute top-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-green-500" />

          {/* Edit Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute bottom-0 left-0 rounded-full rounded-t-none px-4 py-0 text-[10px] h-auto shadow bg-transparent text-foreground"
          >
            Edit
          </Button>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">
              Truck Grear
            </span>
            <Badge
              className={cn(
                "rounded-sm bg-amber-500/20 text-amber-300 text-[10px] font-medium"
              )}
            >
              BUSINESS
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            jillali@onechanneladmin.com
          </p>
        </div>
      </div>

      {/* Right Section */}
      <Button
        variant="link"
        className="px-0 text-sm text-indigo-400 hover:text-indigo-500"
      >
        Change Status
      </Button>
    </div>
  );
}
