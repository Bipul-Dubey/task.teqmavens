"use client";

import { CompanyLogo, Customer } from "@/components/common";
import { DataTable } from "@/components/Table";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const RecentOrders = () => {
  return (
    <DataTable
      title="Recent Orders"
      maxHeight="h-[300px]"
      showFooter
      footer={
        <div className="w-full py-1 flex gap-x-2 items-center justify-center">
          <p className="text-highlight-blue">View 256 more orders</p>
          <div className="bg-highlight-blue rounded-full text-accent-foreground">
            <ArrowRight size={16} />
          </div>
        </div>
      }
      columns={[
        { label: "ORDER ID", key: "orderId" },
        { label: "PRODUCTS", key: "product" },
        { label: "CHANNEL", key: "channel" },
        { label: "CUSTOMER", key: "customer" },
        { label: "TOTAL", key: "amount" },
        { label: "DELIVERY DATE", key: "date" },
      ]}
      rows={[
        {
          orderId: "275936",
          product: (
            <div className="flex items-center gap-2">
              <span>x1</span>
              <Image
                height={10}
                width={10}
                src="/icons/iphone.svg"
                alt="iPhone"
                className="h-5 w-5"
              />
              <span>iPhone 15 pro max</span>
            </div>
          ),
          channel: <CompanyLogo src="/icons/ebay.svg" alt="ebay_logo" />,
          customer: <Customer name="Gabriella Golden" />,
          amount: "$400.00",
          date: "Today",
        },
        {
          orderId: "415368",
          product: (
            <div className="flex items-center gap-2">
              <span>x4</span>
              <Image
                height={10}
                width={10}
                src="/icons/white-tshirt.svg"
                alt="Tshirt"
                className="h-5 w-5"
              />
              <span>White Danim Tshit M...</span>
            </div>
          ),
          channel: <CompanyLogo src="/icons/walmart.svg" alt="walmart_logo" />,
          customer: <Customer name="Harris Santana" />,
          amount: "$151.00",
          date: "Today",
        },
        {
          orderId: "415368",
          product: (
            <div className="flex items-center gap-2">
              <span>x4</span>
              <Image
                height={10}
                width={10}
                src="/icons/white-tshirt.svg"
                alt="Tshirt"
                className="h-5 w-5"
              />
              <span>White Danim Tshit M...</span>
            </div>
          ),
          channel: <CompanyLogo src="/icons/walmart.svg" alt="walmart_logo" />,
          customer: <Customer name="Harris Santana" />,
          amount: "$151.00",
          date: "Today",
        },
        {
          orderId: "415368",
          product: (
            <div className="flex items-center gap-2">
              <span>x4</span>
              <Image
                height={10}
                width={10}
                src="/icons/white-tshirt.svg"
                alt="Tshirt"
                className="h-5 w-5"
              />
              <span>White Danim Tshit M...</span>
            </div>
          ),
          channel: <CompanyLogo src="/icons/walmart.svg" alt="walmart_logo" />,
          customer: <Customer name="Harris Santana" />,
          amount: "$151.00",
          date: "Today",
        },
        {
          orderId: "275063",
          product: (
            <div className="flex items-center gap-2">
              <span>x2</span>
              <Image
                height={10}
                width={10}
                src="/icons/perfume.svg"
                alt="Perfume"
                className="h-5 w-5"
              />
              <span>David Beckham class...</span>
            </div>
          ),
          channel: (
            <CompanyLogo src="/icons/facebook.svg" alt="facebook_logo" />
          ),
          customer: <Customer name="Lilia Ponce" />,
          amount: "$167.00",
          date: "Tomorrow",
        },
        {
          orderId: "274778",
          product: (
            <div className="flex items-center gap-2">
              <span>x3</span>
              <Image
                height={10}
                width={10}
                src="/icons/samsung.svg"
                alt="Samsung"
                className="h-5 w-5"
              />
              <span>Samsung i-20 serie...</span>
            </div>
          ),
          channel: <CompanyLogo src="/icons/amazon.svg" alt="amazon_logo" />,
          customer: <Customer name="Rehan Chase" />,
          amount: "$262.00",
          date: "Tomorrow",
        },
        {
          orderId: "638032",
          product: (
            <div className="flex items-center gap-2">
              <span>x5</span>
              <Image
                height={10}
                width={10}
                src="/icons/lipstick.svg"
                alt="Lipstick"
                className="h-5 w-5"
              />
              <span>Nykaa Red lipstick</span>
            </div>
          ),
          channel: <CompanyLogo src="/icons/etsy.svg" alt="etsy_logo" />,
          customer: <Customer name="Maxim Bray" />,
          amount: "$319.00",
          date: "05/01/2023",
        },
      ]}
    />
  );
};

export default RecentOrders;
