import AccountDetails from "@/components/AccountDetails";
import Header from "@/components/Header";
import SubHeader from "@/components/Subheader";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="h-dvh">
      <ScrollArea className="h-dvh">
        <Header />
        <SubHeader />
        <AccountDetails />
      </ScrollArea>
    </div>
  );
}
