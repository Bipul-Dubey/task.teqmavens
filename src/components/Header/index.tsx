"use client";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Bell, ChevronDown, Menu, Search, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback } from "../ui/avatar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-b-background">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            {/* <SheetContent side="left">
              <div className="p-4 font-semibold">Sidebar</div>
            </SheetContent> */}
          </Sheet>
          <div className="hidden md:flex relative w-[160px] h-[40px]">
            <Image
              src="/company_logo_dark.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop Logo */}
        <div className="hidden md:flex items-center">
          <div className="relative w-[150px] h-[40px]">
            <Image
              src="/company_logo_dark.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 mx-4 max-w-lg">
          <div className="flex items-center w-full rounded-md bg-background px-3 py-2 text-foreground border border-border shadow-sm">
            <Search className="mr-2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none border-none focus:ring-0"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunMoon className="h-5 w-5" />
          </Button>

          {/* Notification */}
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          {/* User */}
          <div className="flex items-center gap-2  px-2 py-1 cursor-pointer transition-colors hover:bg-muted/50 border-border">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-purple-400">MS</AvatarFallback>
            </Avatar>
            <div className="hidden sm:flex flex-col leading-tight text-xs">
              <span className="font-medium">Manoj Sharma</span>
              <span className="text-muted-foreground">Super Admin</span>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
