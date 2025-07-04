"use client";

import { Customer } from "@/components/common";
import { DataTable } from "@/components/Table";
import { ArrowRight } from "lucide-react";

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
              <img
                src="/products/iphone.png"
                alt="iPhone"
                className="h-5 w-5"
              />
              <span className="truncate max-w-[160px]">iPhone 15 pro max</span>
            </div>
          ),
          channel: <img src="/channels/ebay.svg" alt="ebay" className="h-5" />,
          customer: <Customer name="Gabriella Golden" />,
          total: "$400.00",
        },
        {
          transactionId: "#123-456-7890",
          product: (
            <div className="flex items-center gap-2">
              <img
                src="/products/tshirt.png"
                alt="Tshirt"
                className="h-5 w-5"
              />
              <span className="truncate max-w-[160px]">
                White Danim Tshit M Size
              </span>
            </div>
          ),
          channel: (
            <img src="/channels/walmart.svg" alt="Walmart" className="h-5" />
          ),
          customer: <Customer name="Harris Santana" />,
          total: "$151.00",
        },
        {
          transactionId: "#123-456-7890",
          product: (
            <div className="flex items-center gap-2">
              <img
                src="/products/perfume.png"
                alt="Perfume"
                className="h-5 w-5"
              />
              <span className="truncate max-w-[160px]">
                David Beckham classic Blue...
              </span>
            </div>
          ),
          channel: (
            <img src="/channels/facebook.svg" alt="Facebook" className="h-5" />
          ),
          customer: <Customer name="Lilia Ponce" />,
          total: "$167.00",
        },
        {
          transactionId: "#123-456-7890",
          product: (
            <div className="flex items-center gap-2">
              <img
                src="/products/samsung.png"
                alt="Samsung"
                className="h-5 w-5"
              />
              <span className="truncate max-w-[160px]">
                Samsung i-20 series smart...
              </span>
            </div>
          ),
          channel: (
            <img src="/channels/amazon.svg" alt="Amazon" className="h-5" />
          ),
          customer: <Customer name="Rehan Chase" />,
          total: "$262.00",
        },
        {
          transactionId: "#123-456-7890",
          product: (
            <div className="flex items-center gap-2">
              <img
                src="/products/lipstick.png"
                alt="Lipstick"
                className="h-5 w-5"
              />
              <span className="truncate max-w-[160px]">Nykaa Red lipstick</span>
            </div>
          ),
          channel: <img src="/channels/etsy.svg" alt="Etsy" className="h-5" />,
          customer: <Customer name="Maxim Bray" />,
          total: "$319.00",
        },
      ]}
    />
  );
};

export default RecentTransactions;
