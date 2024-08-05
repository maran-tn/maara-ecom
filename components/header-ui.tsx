"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import ThemeSwitch from "./theme-switch";
import Link from "next/link";
const SheetDemo = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    );
  }
  return (
    <SheetContent side={"left"}>
      <SheetHeader>
        <SheetTitle className="text-xs pt-5 font-normal">
          Find yourself, Be yourself
        </SheetTitle>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Men s</AccordionTrigger>
            <AccordionContent>Shirt</AccordionContent>
            <AccordionContent>T-Shirt</AccordionContent>
            <AccordionContent>Oversized Tees</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Men s</AccordionTrigger>
            <AccordionContent>Shirt</AccordionContent>
            <AccordionContent>T-Shirt</AccordionContent>
            <AccordionContent>Oversized Tees</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <SheetFooter className="gap-2">
        <Button variant={"secondary"}>Register</Button>
        <Button>Login</Button>
      </SheetFooter>
    </SheetContent>
  );
};

export const HeaderUi = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Sheet>
      <Dialog open={open} onOpenChange={setOpen}>
        <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-2 flex h-14 max-w-screen-2xl items-center">
            <div className="mr-4 hidden md:flex">
              <a
                className="mr-4 flex items-center justify-center space-x-2 lg:mr-6"
                href="/"
              >
                <svg
                  width="133"
                  height="24"
                  className="mt-1 fill-black dark:fill-white"
                  viewBox="0 0 133 24"
                  fill="none"
                  stroke="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.2328 15H36.6312C36.5922 15 36.5531 14.9766 36.5297 14.9375L31.4984 6.20312C31.2172 5.73438 30.7484 5.45312 30.2016 5.45312C29.6547 5.47656 29.1703 5.78125 28.9047 6.24219L25.6547 11.8672L27.35 14.8203L27.3656 14.875C27.3656 14.9375 27.3109 15 27.2484 15H25.6547C25.6156 15 25.5687 14.9766 25.5531 14.9375C24.3656 12.8594 24.9203 13.8281 23.7719 11.8672L20.5141 6.20312C20.2328 5.73438 19.7484 5.45312 19.225 5.45312C18.6781 5.47656 18.1937 5.78125 17.9047 6.24219L12.8891 14.9375C12.8734 14.9766 12.8344 15 12.7875 15H11.1937C11.1312 15 11.0766 14.9375 11.0766 14.875L11.0922 14.8203L16.5297 5.39062C17.1 4.42188 18.0922 3.85938 19.2016 3.83594C20.3344 3.83594 21.3656 4.46094 21.9281 5.45312L24.725 10.25L27.4906 5.45312C28.0609 4.46094 29.1078 3.83594 30.2406 3.83594C31.3344 3.85938 32.3422 4.42188 32.8891 5.39062L38.3344 14.8203L38.35 14.8828C38.35 14.9453 38.3031 15 38.2328 15ZM59.2844 15H57.6906C57.6516 15 57.6047 14.9766 57.5891 14.9375L52.55 6.20312C52.2766 5.69531 51.8312 5.49219 51.2609 5.46875C50.7297 5.46875 50.2297 5.78125 49.9641 6.24219L44.9484 14.9375C44.925 14.9766 44.8859 15 44.8469 15H43.2297C43.175 15 43.1203 14.9453 43.1203 14.8906C43.1203 14.8672 43.1281 14.8438 43.1516 14.8203L48.5891 5.39062C49.1359 4.42188 50.1437 3.83594 51.2609 3.83594C52.3937 3.83594 53.4016 4.42188 53.9484 5.39062L59.3859 14.8203L59.4094 14.8828C59.4094 14.9453 59.3625 15 59.2844 15ZM80.3438 15H78.75C78.7109 15 78.6641 14.9766 78.6484 14.9375L73.6094 6.20312C73.3359 5.69531 72.8906 5.49219 72.3203 5.46875C71.7891 5.46875 71.2891 5.78125 71.0234 6.24219L66.0078 14.9375C65.9844 14.9766 65.9453 15 65.9062 15H64.2891C64.2344 15 64.1797 14.9453 64.1797 14.8906C64.1797 14.8672 64.1875 14.8438 64.2109 14.8203L69.6484 5.39062C70.1953 4.42188 71.2031 3.83594 72.3203 3.83594C73.4531 3.83594 74.4609 4.42188 75.0078 5.39062L80.4453 14.8203L80.4688 14.8828C80.4688 14.9453 80.4219 15 80.3438 15ZM99.0906 15H97.4969L94.7078 10.1875C94.6844 10.1484 94.6453 10.125 94.6062 10.125H88.3797C87.8875 10.125 87.4266 10.0078 87.0203 9.80469L86.9812 9.79688C86.9187 9.79688 86.8562 9.83594 86.8562 9.92188V14.875C86.8562 14.9375 86.8016 15 86.7391 15H85.3406C85.2781 15 85.2391 14.9375 85.2391 14.875V6.75C85.3641 5.13281 86.7156 3.83594 88.3797 3.83594H96.0984C97.8172 3.83594 99.2781 5.19531 99.2937 6.91406V6.99219C99.2937 8.55469 98.1375 9.84375 96.6453 10.0859C96.5906 10.1016 96.5516 10.1484 96.5516 10.1953L96.5672 10.25L99.1922 14.8203L99.2078 14.875C99.2078 14.9375 99.1531 15 99.0906 15ZM96.1687 8.5C97.0047 8.5 97.6844 7.82031 97.6844 6.98438C97.6844 6.14062 97.0047 5.46094 96.1687 5.46094H88.3719C87.5359 5.46094 86.8562 6.14062 86.8562 6.98438C86.8562 7.82031 87.5359 8.5 88.3719 8.5H96.1687ZM120.228 15H118.634C118.595 15 118.548 14.9766 118.533 14.9375L113.494 6.20312C113.22 5.69531 112.775 5.49219 112.205 5.46875C111.673 5.46875 111.173 5.78125 110.908 6.24219L105.892 14.9375C105.869 14.9766 105.83 15 105.791 15H104.173C104.119 15 104.064 14.9453 104.064 14.8906C104.064 14.8672 104.072 14.8438 104.095 14.8203L109.533 5.39062C110.08 4.42188 111.088 3.83594 112.205 3.83594C113.338 3.83594 114.345 4.42188 114.892 5.39062L120.33 14.8203L120.353 14.8828C120.353 14.9453 120.306 15 120.228 15Z"
                    fill="black dark:fill-white"
                  />
                </svg>
              </a>
              <nav className="flex items-center gap-4 text-sm lg:gap-6">
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="/docs"
                >
                  Docs
                </a>
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground"
                  href="/docs/components"
                >
                  Components
                </a>
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="/blocks"
                >
                  Blocks
                </a>
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="/charts"
                >
                  Charts
                </a>
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="/themes"
                >
                  Themes
                </a>
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="/examples"
                >
                  Examples
                </a>
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="/colors"
                >
                  Colors
                </a>
              </nav>
            </div>
            {isDesktop ? null : (
              <>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-1 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                  >
                    <Menu />

                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </DialogTrigger>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/shadcn-ui/ui"
                >
                  <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0">
                    <UserRound className="hidden" />
                    <span className="sr-only">GitHub</span>
                  </div>
                </a>
              </>
            )}
            <SheetDemo />
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex-1 md:w-auto md:flex-none">
                {!isDesktop ? (
                  <div className="md:flex justify-center">
                    <a
                      className="flex w-full items-center justify-center space-x-2 "
                      href="/"
                    >
                      <svg
                        width="133"
                        height="24"
                        className="mt-1 fill-black dark:fill-white"
                        viewBox="0 0 133 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M38.2328 15H36.6312C36.5922 15 36.5531 14.9766 36.5297 14.9375L31.4984 6.20312C31.2172 5.73438 30.7484 5.45312 30.2016 5.45312C29.6547 5.47656 29.1703 5.78125 28.9047 6.24219L25.6547 11.8672L27.35 14.8203L27.3656 14.875C27.3656 14.9375 27.3109 15 27.2484 15H25.6547C25.6156 15 25.5687 14.9766 25.5531 14.9375C24.3656 12.8594 24.9203 13.8281 23.7719 11.8672L20.5141 6.20312C20.2328 5.73438 19.7484 5.45312 19.225 5.45312C18.6781 5.47656 18.1937 5.78125 17.9047 6.24219L12.8891 14.9375C12.8734 14.9766 12.8344 15 12.7875 15H11.1937C11.1312 15 11.0766 14.9375 11.0766 14.875L11.0922 14.8203L16.5297 5.39062C17.1 4.42188 18.0922 3.85938 19.2016 3.83594C20.3344 3.83594 21.3656 4.46094 21.9281 5.45312L24.725 10.25L27.4906 5.45312C28.0609 4.46094 29.1078 3.83594 30.2406 3.83594C31.3344 3.85938 32.3422 4.42188 32.8891 5.39062L38.3344 14.8203L38.35 14.8828C38.35 14.9453 38.3031 15 38.2328 15ZM59.2844 15H57.6906C57.6516 15 57.6047 14.9766 57.5891 14.9375L52.55 6.20312C52.2766 5.69531 51.8312 5.49219 51.2609 5.46875C50.7297 5.46875 50.2297 5.78125 49.9641 6.24219L44.9484 14.9375C44.925 14.9766 44.8859 15 44.8469 15H43.2297C43.175 15 43.1203 14.9453 43.1203 14.8906C43.1203 14.8672 43.1281 14.8438 43.1516 14.8203L48.5891 5.39062C49.1359 4.42188 50.1437 3.83594 51.2609 3.83594C52.3937 3.83594 53.4016 4.42188 53.9484 5.39062L59.3859 14.8203L59.4094 14.8828C59.4094 14.9453 59.3625 15 59.2844 15ZM80.3438 15H78.75C78.7109 15 78.6641 14.9766 78.6484 14.9375L73.6094 6.20312C73.3359 5.69531 72.8906 5.49219 72.3203 5.46875C71.7891 5.46875 71.2891 5.78125 71.0234 6.24219L66.0078 14.9375C65.9844 14.9766 65.9453 15 65.9062 15H64.2891C64.2344 15 64.1797 14.9453 64.1797 14.8906C64.1797 14.8672 64.1875 14.8438 64.2109 14.8203L69.6484 5.39062C70.1953 4.42188 71.2031 3.83594 72.3203 3.83594C73.4531 3.83594 74.4609 4.42188 75.0078 5.39062L80.4453 14.8203L80.4688 14.8828C80.4688 14.9453 80.4219 15 80.3438 15ZM99.0906 15H97.4969L94.7078 10.1875C94.6844 10.1484 94.6453 10.125 94.6062 10.125H88.3797C87.8875 10.125 87.4266 10.0078 87.0203 9.80469L86.9812 9.79688C86.9187 9.79688 86.8562 9.83594 86.8562 9.92188V14.875C86.8562 14.9375 86.8016 15 86.7391 15H85.3406C85.2781 15 85.2391 14.9375 85.2391 14.875V6.75C85.3641 5.13281 86.7156 3.83594 88.3797 3.83594H96.0984C97.8172 3.83594 99.2781 5.19531 99.2937 6.91406V6.99219C99.2937 8.55469 98.1375 9.84375 96.6453 10.0859C96.5906 10.1016 96.5516 10.1484 96.5516 10.1953L96.5672 10.25L99.1922 14.8203L99.2078 14.875C99.2078 14.9375 99.1531 15 99.0906 15ZM96.1687 8.5C97.0047 8.5 97.6844 7.82031 97.6844 6.98438C97.6844 6.14062 97.0047 5.46094 96.1687 5.46094H88.3719C87.5359 5.46094 86.8562 6.14062 86.8562 6.98438C86.8562 7.82031 87.5359 8.5 88.3719 8.5H96.1687ZM120.228 15H118.634C118.595 15 118.548 14.9766 118.533 14.9375L113.494 6.20312C113.22 5.69531 112.775 5.49219 112.205 5.46875C111.673 5.46875 111.173 5.78125 110.908 6.24219L105.892 14.9375C105.869 14.9766 105.83 15 105.791 15H104.173C104.119 15 104.064 14.9453 104.064 14.8906C104.064 14.8672 104.072 14.8438 104.095 14.8203L109.533 5.39062C110.08 4.42188 111.088 3.83594 112.205 3.83594C113.338 3.83594 114.345 4.42188 114.892 5.39062L120.33 14.8203L120.353 14.8828C120.353 14.9453 120.306 15 120.228 15Z"
                          fill="black dark:fill-white"
                        />
                      </svg>
                    </a>
                  </div>
                ) : (
                  <button className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-2 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
                    <span className="hidden lg:inline-flex">Search</span>
                    <span className="inline-flex lg:hidden">Search...</span>
                    <a className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1  font-mono text-[10px] font-medium opacity-100 sm:flex ">
                      <Search className="p-1 !px-0 py-1" />
                    </a>
                  </button>
                )}
              </div>
              <nav className="flex items-center gap-1">
                <Link href="/account">
                  <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0">
                    <UserRound />
                    <span className="sr-only">Profile</span>
                  </div>
                </Link>
                <Link href="/cart">
                  <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0">
                    <ShoppingBag />
                    <span className="sr-only">Cart</span>
                  </div>
                </Link>
                {isDesktop ? <ThemeSwitch /> : null}
              </nav>
            </div>
          </div>
        </header>
      </Dialog>
    </Sheet>
  );
};
