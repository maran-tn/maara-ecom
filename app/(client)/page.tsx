import { client } from "@/sanity/lib/client";
import Header from "@/components/header";
import { Post } from "@/utils/interface";
import PostComponent from "@/components/postcomponent";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { HomeTrend } from "@/components/album-artwork";
import { listenNowAlbums, madeForYouAlbums } from "@/components/data/album";
import HomePage from "./components/home";
import { cn } from "@/lib/utils";
import { PortableText } from "next-sanity";
import { slugify } from "@/utils/helpers";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Toc from "@/components/toc";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Github, Heart, Share } from "lucide-react";
import { Separator } from "@/components/ui/separator";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
    body,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");

  return (
    <div className="">
      <div className="relative">
        <HomePage />
        <section className="px-0 pt-0 mt-4 mn-bg-grey dark:bg-black">
          <div className="grid">
            <h2 className="section__title dark:text-white">Blogs</h2>
            <span className="section__subtitle">Latest blogs</span>
          </div>
          <Separator className="dark:text-white w-full max-md:hidden" />
          <div className="flex gap-2 ">
            <div className="w-full p-6">
              {posts.map((item, id) => (
                <Card
                  key={id}
                  className={cn(
                    "flex flex-col items-start gap-2 rounded-lg border p-3 mb-4 text-left text-sm transition-all hover:bg-accent",
                    item.title === item.title && "bg-muted"
                  )}
                >
                  <div className="flex w-full flex-col gap-1">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">{item.title}</div>
                        {!item.slug && (
                          <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "ml-auto text-xs"
                          //   mail.selected === item.id
                          //     ? "text-foreground"
                          //     : "text-muted-foreground"
                        )}
                      >
                        {new Date(item?.publishedAt).toDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="line-clamp-2 text-sm text-muted-foreground">
                    {item?.excerpt}
                  </div>

                  <div className="flex w-full h-12">
                    <Button variant={"unset"} className="w-12 h-12">
                      <Heart />
                    </Button>
                    <Button variant={"unset"} className="w-12 h-12">
                      <Share />
                    </Button>
                    <div className="flex justify-end w-full">
                      <Link
                        href={`/blogs/${item.slug.current}`}
                        className={badgeVariants({
                          variant: "outline",
                          className: "h-10",
                        })}
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="min-w-[40%] lg:min-w-[400px] max-w-min border-l border-grey pl-8 pt-3 max-md:hidden">
              <div className="flex flex-col gap-10">
                <div>
                  <h1 className="font-medium text-xl mb-8">
                    Stories form all interests
                  </h1>
                  <div className="flex gap-3 flex-wrap">
                    <Button variant={"secondary"} className="tag ">
                      graphic desgins
                    </Button>
                    <Button variant={"secondary"} className="tag  ">
                      programming
                    </Button>
                    <Button variant={"secondary"} className="tag  ">
                      natural
                    </Button>
                    <Button variant={"secondary"} className="tag  ">
                      film making
                    </Button>
                    <Button variant={"secondary"} className="tag  ">
                      photography
                    </Button>
                    <Button variant={"secondary"} className="tag  ">
                      social media
                    </Button>
                    <Button variant={"secondary"} className="tag  ">
                      cooking
                    </Button>
                    <Button variant={"secondary"} className="tag  ">
                      news
                    </Button>
                    <Button variant={"secondary"} className="tag  ">
                      tech
                    </Button>
                    <Button variant={"secondary"} className="tag  ">
                      video editing
                    </Button>
                    <Button variant={"secondary"} className="tag  ">
                      travel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Separator className="dark:text-white w-full max-md:hidden" />
        </section>
        <section className="mn-bg-grey dark:bg-black dark:text-black">
          <h2 className="section__title dark:text-white ">Projects</h2>
          <span className="section__subtitle">Latest</span>
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {listenNowAlbums.map((album) => (
                <HomeTrend
                  key={album.name}
                  album={album}
                  className="w-[auto] bg-white p-2 rounded-md mn-shad dark:shadow-none"
                  aspectRatio="square"
                  width={550}
                  height={330}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <div className="flex justify-center gap-1">
          <Link href="" className={buttonVariants({ variant: "default", className:"gap-2" })}> Get Source <Github /></Link>

            
          </div>
          <Separator className="mt-5" />
        </section>
        <About />
        <Contact />
      </div>
    </div>
  );
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Post" width={700} height={700} />
    ),
  },
  block: {
    h2: ({ value }: any) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-3xl font-bold mb-3"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }: any) => (
      <h3
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }: any) => (
      <h4
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }: any) => (
      <h5
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }: any) => (
      <h6
        id={slugify(value.children[0].text)}
        className="text-xl font-bold mb-3"
      >
        {value.children[0].text}
      </h6>
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
