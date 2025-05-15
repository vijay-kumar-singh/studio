"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/layout/main-nav";
import { Button } from "@/components/ui/button";
import { Menu, BriefcaseBusiness } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile"; // Assuming useIsMobile hook exists
import { ModeToggle } from "@/components/mode-toggle";
export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
          <BriefcaseBusiness className="h-6 w-6" />
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] p-0">
                <div className="p-4">
                  <Link href="/" className="flex items-center space-x-2 mb-4 text-primary hover:text-primary/80 transition-colors">
                     <BriefcaseBusiness className="h-6 w-6" />
                    <span className="font-bold text-lg">{siteConfig.name}</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-2 px-4">
                  {siteConfig.mainNav.map((item) =>
                    item.href ? (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    ) : (
                      <span
                        key={item.title}
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                      ></span>
                    ),
                  )}
                </nav>
 <ModeToggle />

              </SheetContent>
            </Sheet>
          ) : (
            <MainNav items={siteConfig.mainNav} />
          )}
        </div>
 <ModeToggle />
      </div>
    </header>
  );
}
