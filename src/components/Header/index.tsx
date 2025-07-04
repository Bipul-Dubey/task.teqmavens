"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Bell, ChevronDown, Menu, Moon, Search, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useTheme } from "next-themes";
import React, { useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-b-light-background">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="flex flex-col gap-2 p-4">
                {/* Logo */}
                <div className="relative w-[120px] h-[32px] mb-4">
                  <Image
                    src={
                      isDark
                        ? "/company_logo_dark.svg"
                        : "/company_logo_light.svg"
                    }
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Theme Toggle */}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 justify-start"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                >
                  {isDark ? (
                    <>
                      <Sun className="h-5 w-5" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </Button>
                {/* Notification */}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 justify-start"
                >
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </Button>
              </div>
            </SheetContent>
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
            {isDark ? (
              <Image
                src={`/company_logo_dark.svg`}
                alt="Logo"
                fill
                className="object-contain"
              />
            ) : (
              <Image
                src={`/company_logo_light.svg`}
                alt="Logo"
                fill
                className="object-contain"
              />
            )}
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
            variant="outline"
            size="icon"
            className="hidden md:flex"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Notification */}
          <Button variant="outline" size="icon" className="hidden md:flex">
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
