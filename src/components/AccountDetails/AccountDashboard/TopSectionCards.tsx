"use client";

import React, { useRef } from "react";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

type SectionCardProps = {
  icon: string;
  title: string;
  value: string | number;
  percentage: number;
};

const cards: SectionCardProps[] = [
  {
    icon: "/icons/order_icon.svg",
    title: "Total Orders",
    value: 123,
    percentage: 28,
  },
  {
    icon: "/icons/taken_icon.png",
    title: "Total Taken",
    value: 123,
    percentage: -15,
  },
  {
    icon: "/icons/revenue_icon.svg",
    title: "Total Revenue",
    value: 123,
    percentage: 28,
  },
  {
    icon: "/icons/pending_orders.svg",
    title: "Pending Orders",
    value: "$1234.99",
    percentage: -25,
  },
  {
    icon: "/icons/returns_icon.svg",
    title: "Pending Returns",
    value: "$1234.99",
    percentage: -28,
  },
];

const SectionCard: React.FC<SectionCardProps> = ({
  icon,
  title,
  value,
  percentage,
}) => {
  const isNegative = percentage < 0;
  const percentageColor = isNegative ? "text-red-500" : "text-green-500";

  return (
    <div className="w-[300px] rounded-2xl overflow-hidden bg-b-background border border-border shrink-0">
      <div className="p-4 flex gap-4 bg-background">
        <Image src={icon} height={48} width={48} alt={title} />
        <div className="flex flex-col justify-center">
          <p className="text-sm text-foreground">{title}</p>
          <p className="text-2xl font-semibold text-foreground">{value}</p>
        </div>
      </div>
      <div className="border-t px-4 py-2 text-xs bg-b-background flex justify-between">
        <span className={`${percentageColor} flex gap-x-2`}>
          {isNegative ? <TrendingDown size={15} /> : <TrendingUp size={15} />}{" "}
          {Math.abs(percentage)}%
        </span>
        <span className="text-muted-foreground">From The Last Month</span>
      </div>
    </div>
  );
};

const TopSectionCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-full">
      <div className="relative overflow-x-auto max-w-full">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 pr-6 max-w-full scrollbar-hide"
        >
          {cards.map((card, index) => (
            <SectionCard key={index} {...card} />
          ))}
        </div>

        {/* Scroll Buttons - hide on small screens */}
        <button
          onClick={() => scroll(-300)}
          className="flex absolute left-0 top-[40%] -translate-y-1/2 z-10 bg-muted border border-border rounded-full p-1 shadow hover:bg-accent"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground" />
        </button>

        <button
          onClick={() => scroll(300)}
          className="flex absolute right-0 top-[40%] -translate-y-1/2 z-10 bg-muted border border-border rounded-full p-1 shadow hover:bg-accent"
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default TopSectionCards;
