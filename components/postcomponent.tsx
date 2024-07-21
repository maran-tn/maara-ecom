import Link from "next/link";
import React from "react";
import { Lilita_One, VT323 } from "next/font/google";
import { Post } from "@/utils/interface";
import { Card } from "./ui/card";

interface Props {
  post: Post;
}

const font = Lilita_One({ weight: "400", subsets: ["latin"] });
const dateFont = VT323({ weight: "400", subsets: ["latin"] });

const PostComponent = ({ post }: Props) => {
  return (
    <Card>
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="font-semibold">{post?.title}</div>
          </div>
          <div className="ml-auto text-xs text-muted-foreground my-2 texeple-800">
          {new Date(post?.publishedAt).toDateString()}
          </div>
        </div>
        <div className="text-xs font-medium">Re: Conference Registration</div>
      </div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
      {post?.excerpt}
      </div>
      <Link href={`/blogs/${post?.slug?.current}`}>
        <h2 className={` text-2xl dark:text-slate-300`}>{post?.title}</h2>
        <p className={`${dateFont.className} my-2 texeple-800`}>
          {new Date(post?.publishedAt).toDateString()}
        </p>
        <p className="dark:text-gray-400 mb-4 line-clamp-2">{post?.excerpt}</p>
      </Link>

      {/* TAGS */}

      <div className="m-2">
        {post?.tags?.map((tag) => (
          <span
            key={tag?._id}
            className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900"
          >
            #{tag?.name}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default PostComponent;

// const cardStyle = `
// mb-8
// p-4
// border
// border-gray-900
// rounded-md
// shadow-sm
// shadow-purple-950
// hover:shadow-md
// hover:bg-purple-500
// hover:text-white
// hover:dark:bg-gray-950
// `
