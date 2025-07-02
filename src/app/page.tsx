import Header from "@/components/Header";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="h-dvh">
      <ScrollArea className="h-dvh">
        <Header />
      </ScrollArea>
    </div>
  );
}
