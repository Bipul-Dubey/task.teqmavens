"use client";
import React, { useState } from "react";
import { Pencil, RotateCcw, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AccountDetailsCard() {
  const Row = ({
    label,
    value,
    icon,
  }: {
    label: string;
    value: React.ReactNode;
    icon?: React.ReactNode;
  }) => (
    <div className="flex items-start justify-between py-3">
      <div>
        <p className="text-[10px] uppercase text-muted-foreground font-medium tracking-wide">
          {label}
        </p>
        <p className="text-sm text-foreground">{value}</p>
      </div>
      {icon && <div className="pt-5 text-primary">{icon}</div>}
    </div>
  );

  return (
    <div className="relative w-full max-w-96 rounded-xl border bg-b-background shadow-sm p-4">
      {/* Top-right icons */}
      <div className="absolute top-4 right-4 flex gap-2">
        <Pencil className="h-4 w-4 text-muted-foreground cursor-pointer" />
        <RotateCcw className="h-4 w-4 text-muted-foreground cursor-pointer" />
      </div>

      {/* Content */}
      <div className="flex flex-col divide-y divide-border">
        {/* Row 1 */}
        <div className="flex flex-col gap-4 py-3">
          <div>
            <p className="text-[10px] uppercase text-muted-foreground font-medium tracking-wide">
              Account Name
            </p>
            <p className="text-sm text-foreground">TRUCK GEAR</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-muted-foreground font-medium tracking-wide">
              Contact Owner
            </p>
            <p className="text-sm text-foreground">
              Suchithkumar@Onechanneladmin.Com
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-4 py-3">
          <div className="flex justify-between">
            <div>
              <p className="text-[10px] uppercase text-muted-foreground font-medium tracking-wide">
                Phone Number
              </p>
              <p className="text-sm text-foreground">
                +1 344 434 4455
                <br />
                +1 344 434 4455
              </p>
            </div>
            <Plus className="h-4 w-4 text-primary mt-5" />
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-[10px] uppercase text-muted-foreground font-medium tracking-wide">
                Email
              </p>
              <p className="text-sm text-foreground">
                Jillali@Onechanneladmin.Com
                <br />
                Jillali@Onechanneladmin.Com
              </p>
            </div>
            <Plus className="h-4 w-4 text-primary mt-5" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="py-3">
          <Row label="Company Type" value="Partner" />
          <Row label="Industry" value="Accounting" />
        </div>

        {/* Row 4 */}
        <div className="py-3">
          <Row label="Website" value="WWW.TRUCKGEAR.COM" />
          <Row label="No of Employees" value="10" />
        </div>

        {/* Row 5 */}
        <div className="py-3">
          <Row
            label="Credit Limit"
            value="$ 5000"
            icon={<Plus className="h-4 w-4" />}
          />
          <Row
            label="Available Credit"
            value="$ 806.71"
            icon={<RotateCcw className="h-4 w-4" />}
          />
        </div>
      </div>
    </div>
  );
}

type PhoneEntry = {
  country: string;
  number: string;
};

export function EditBusinessDetails() {
  const [emails, setEmails] = useState([""]);
  const [phones, setPhones] = useState<PhoneEntry[]>([
    { country: "us", number: "" },
  ]);

  const handleAddEmail = () => setEmails([...emails, ""]);
  const handleRemoveEmail = (index: number) =>
    setEmails(emails.filter((_, i) => i !== index));

  const handleAddPhone = () =>
    setPhones([...phones, { country: "us", number: "" }]);
  const handleRemovePhone = (index: number) =>
    setPhones(phones.filter((_, i) => i !== index));

  const handleCountryChange = (index: number, value: string) => {
    const updated = [...phones];
    updated[index].country = value;
    setPhones(updated);
  };

  const countryMap: Record<string, string> = {
    us: "🇺🇸",
    in: "🇮🇳",
    gb: "🇬🇧",
  };

  return (
    <div className="w-full max-w-96 rounded-xl border bg-b-background p-4 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-foreground">
          Business Details
        </h2>
        <Button
          variant="ghost"
          size="sm"
          className="text-green-500 gap-1 hover:text-green-600 px-1"
        >
          <Save className="h-4 w-4" />
          Save & Close
        </Button>
      </div>

      {/* Contact Owner & Account Name */}
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground">
            Contact Owner
          </label>
          <Input placeholder="Enter owner email" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground">
            Account Name
          </label>
          <Input placeholder="Enter account name" />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium text-muted-foreground">
            Email
          </label>
          <button
            onClick={handleAddEmail}
            className="text-xs text-indigo-500 font-medium"
          >
            ADD
          </button>
        </div>
        {emails.map((email, idx) => (
          <div key={idx} className="flex items-center gap-2 mt-1">
            <Input placeholder="Enter email" className="flex-1" />
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleRemoveEmail(idx)}
              className="text-xs px-3"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

      {/* Phone Number */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium text-muted-foreground">
            Phone Number
          </label>
          <button
            onClick={handleAddPhone}
            className="text-xs text-indigo-500 font-medium"
          >
            ADD
          </button>
        </div>
        {phones.map((phone, idx) => (
          <div key={idx} className="flex items-center gap-2 mt-1">
            <Select
              value={phone.country}
              onValueChange={(val) => handleCountryChange(idx, val)}
            >
              <SelectTrigger className="w-16 text-lg">
                <SelectValue>{countryMap[phone.country]}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">🇺🇸</SelectItem>
                <SelectItem value="in">🇮🇳</SelectItem>
                <SelectItem value="gb">🇬🇧</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Enter number" className="flex-1" />
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleRemovePhone(idx)}
              className="text-xs px-3"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

      {/* Company Type */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-muted-foreground">
          Company Type
        </label>
        <Input placeholder="Enter company type" />
      </div>

      {/* Industry */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-muted-foreground">
          Industry
        </label>
        <Input placeholder="Enter industry" />
      </div>

      {/* Website */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-muted-foreground">
          Website
        </label>
        <Input placeholder="Enter website" />
      </div>

      {/* No. of Employees */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-muted-foreground">
          No of Employees
        </label>
        <Input type="number" placeholder="Enter number" />
      </div>
    </div>
  );
}

const BusinessDetails = () => {
  const [isEdit, setIsEdit] = useState(true);
  return isEdit ? <EditBusinessDetails /> : <AccountDetailsCard />;
};

export default BusinessDetails;
