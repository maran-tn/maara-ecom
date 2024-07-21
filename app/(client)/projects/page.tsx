import React from "react";
import { AlbumArtwork } from "./components/album-artwork";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { GraphicDesign, ProductDesign, WebDevolpment, } from "./components/data/album";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Studiodess } from "./components/studio/studiodes";

const page = () => {
  return (
    <div>
      <section className="">
        <div className="grid gap-1.5 p-4 items-center justify-center sm:text-center max-md:justify-start">
          <h2 className="text-lg font-semibold items-center leading-none tracking-tight vaul-scrollable">
            Product Design
          </h2>
          <p className="text-sm text-center text-muted-foreground">
          Crafting Innovation, One Design at a Time
          </p>
        </div>
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {ProductDesign.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[250px]"
                aspectRatio="square"
                width={250}
                height={330}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <section>
        <div className="grid gap-1.5 p-4 items-center justify-center sm:text-center max-md:justify-start">
          <h2 className="text-lg font-semibold items-center leading-none tracking-tight vaul-scrollable">
            Web Design & Development
          </h2>
          <p className="text- text-muted-foreground">
          Your Vision, Our Code
          </p>
        </div>
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {WebDevolpment.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[250px]"
                aspectRatio="square"
                width={250}
                height={330}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <section>
        <div className="grid gap-1.5 p-4 items-center justify-center sm:text-center max-md:justify-start">
          <h2 className="text-lg font-semibold items-center leading-none tracking-tight vaul-scrollable">
            Creative Designs
          </h2>
          <p className="text-sm text-center text-muted-foreground">
          Your Vision, Our Creation
          </p>
        </div>
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {GraphicDesign.map((album) => (
              <Studiodess
                key={album.name}
                album={album}
                className="w-[250px]"
                aspectRatio="square"
                width={250}
                height={330}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      <section className="pb-12">
        <div className="grid gap-1.5 p-4 items-center justify-center sm:text-center max-md:justify-start">
          <h2 className="text-lg font-semibold items-center leading-none tracking-tight vaul-scrollable">
            Our Brands
          </h2>
          <p className="text-sm text-center text-muted-foreground">
            Find Yourself, Be Yourself.
          </p>
        </div>
        <div className="flex">
        <div className="grid justify-center w-full">
          <Link href="/" className="flex flex-col gap-2">
            <img src="/assets/maranpicz.png" alt="maranpicz" className="bg-black w-[300px] p-4 rounded-md" />

            <Button className="justify-center">Visit Now</Button>
          </Link>
        </div>
        <div className="grid justify-center w-full">
          <Link href="/" className="flex flex-col gap-2">
            <img src="/assets/maara-logo.png" alt="maara clothing" className="bg-black w-[300px] p-4 rounded-md" />

            <Button className="justify-center">Visit Now</Button>
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
};

export default page;
