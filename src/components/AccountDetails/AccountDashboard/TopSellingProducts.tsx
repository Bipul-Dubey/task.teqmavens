"use client";

import { DataTable } from "@/components/Table";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const TopSellingProducts = () => {
  return (
    <DataTable
      title="Top Selliing Products"
      maxHeight="h-[300px]"
      showFooter
      footer={
        <div className="w-full py-1 flex gap-x-2 items-center justify-center">
          <p className="text-highlight-blue">View 56 more products</p>
          <div className="bg-highlight-blue rounded-full text-accent-foreground">
            <ArrowRight size={16} />
          </div>
        </div>
      }
      columns={[
        { label: "PRODUCTS", key: "product" },
        { label: "SELLS", key: "sells" },
        { label: "CATEGORY", key: "category" },
        { label: "PRICE", key: "price" },
        { label: "TOTAL REVENUE", key: "revenue" },
      ]}
      rows={[
        {
          product: (
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={10}
                src="/icons/iphone.svg"
                alt="iPhone"
                className="h-5 w-5"
              />
              <span className="truncate max-w-[160px]">iPhone 15 pro max</span>
            </div>
          ),
          sells: 156,
          category: "Mobile",
          price: "$ 40.00",
          revenue: "$ 6,240.00",
        },
        {
          product: (
            <div className="flex items-center gap-2">
              <Image
                src="/icons/white-tshirt.svg"
                alt="T-shirt"
                className="h-5 w-5"
                height={10}
                width={10}
              />
              <span className="truncate max-w-[160px]">
                White Danim Tshit M Size
              </span>
            </div>
          ),
          sells: 139,
          category: "Cloths",
          price: "$ 15.00",
          revenue: "$ 2,085",
        },
        {
          product: (
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={10}
                src="/icons/perfume.svg"
                alt="Perfume"
                className="h-5 w-5"
              />
              <span className="truncate max-w-[160px]">
                David Beckham classic Blue...
              </span>
            </div>
          ),
          sells: 125,
          category: "Perfume",
          price: "$ 16.00",
          revenue: "$ 1,167.00",
        },
        {
          product: (
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={10}
                src="/icons/samsung.svg"
                alt="Samsung"
                className="h-5 w-5"
              />
              <span className="truncate max-w-[160px]">
                Samsung i-20 series smart...
              </span>
            </div>
          ),
          sells: 167,
          category: "Watch",
          price: "$ 26.00",
          revenue: "$ 2,262.00",
        },
        {
          product: (
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={10}
                src="/icons/lipstick.svg"
                alt="Lipstick"
                className="h-5 w-5"
              />
              <span className="truncate max-w-[160px]">Nykaa Red lipstick</span>
            </div>
          ),
          sells: 110,
          category: "Beauty",
          price: "$ 31.00",
          revenue: "$ 3,319.00",
        },
        {
          product: (
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={10}
                src="/icons/iphone.svg"
                alt="iPhone"
                className="h-5 w-5"
              />
              <span className="truncate max-w-[160px]">iPhone 15 pro max</span>
            </div>
          ),
          sells: 168,
          category: "Cloths",
          price: "$ 20.00",
          revenue: "$ 2,402.00",
        },
        {
          product: (
            <div className="flex items-center gap-2">
              <Image
                src="/icons/white-tshirt.svg"
                alt="T-shirt"
                className="h-5 w-5"
                height={10}
                width={10}
              />
              <span className="truncate max-w-[160px]">
                White Danim Tshit M...
              </span>
            </div>
          ),
          sells: 165,
          category: "Perfume",
          price: "$ 25.00",
          revenue: "$ 2,552.00",
        },
      ]}
    />
  );
};

export default TopSellingProducts;
