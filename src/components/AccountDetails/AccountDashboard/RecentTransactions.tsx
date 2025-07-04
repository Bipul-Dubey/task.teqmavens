"use client";

import { CompanyLogo, Customer } from "@/components/common";
import { DataTable } from "@/components/Table";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const RecentTransactions = () => {
  return (
    <DataTable
      title="Recent Transactions"
      maxHeight="h-[300px]"
      showFooter
      footer={
        <div className="w-full py-1 flex gap-x-2 items-center justify-center">
          <p className="text-highlight-blue">View 256 more transactions</p>
          <div className="bg-highlight-blue rounded-full text-accent-foreground">
            <ArrowRight size={16} />
          </div>
        </div>
      }
      columns={[
        { label: "TRANSACTION ID", key: "transactionId" },
        { label: "PRODUCTS", key: "product" },
        { label: "CHANNEL", key: "channel" },
        { label: "CUSTOMER", key: "customer" },
        { label: "TOTAL", key: "total" },
      ]}
      rows={[
        {
          transactionId: "#123-456-7890",
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
          channel: <CompanyLogo src="/icons/ebay.svg" alt="ebay_logo" />,
          customer: <Customer name="Gabriella Golden" />,
          total: "$400.00",
        },
        {
          transactionId: "#123-456-7890",
          product: (
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={10}
                src="/icons/white-tshirt.svg"
                alt="Tshirt"
                className="h-5 w-5"
              />
              <span className="truncate max-w-[160px]">
                White Danim Tshit M Size
              </span>
            </div>
          ),
          channel: <CompanyLogo src="/icons/walmart.svg" alt="walmart_logo" />,
          customer: <Customer name="Harris Santana" />,
          total: "$151.00",
        },
        {
          transactionId: "#123-456-7890",
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
          channel: (
            <CompanyLogo src="/icons/facebook.svg" alt="facebook_logo" />
          ),
          customer: <Customer name="Lilia Ponce" />,
          total: "$167.00",
        },
        {
          transactionId: "#123-456-7890",
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
          channel: <CompanyLogo src="/icons/amazon.svg" alt="amazon_logo" />,
          customer: <Customer name="Rehan Chase" />,
          total: "$262.00",
        },
        {
          transactionId: "#123-456-7890",
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
          channel: <CompanyLogo src="/icons/etsy.svg" alt="etsy_logo" />,
          customer: <Customer name="Maxim Bray" />,
          total: "$319.00",
        },
      ]}
    />
  );
};

export default RecentTransactions;
