interface PostCardProps {
  title: string;
  image: string;
  description: string;
}

import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function PostCard({ title, image, description }: PostCardProps) {
  return (
    <div className="card flex flex-col gap-2 items-center justify-between rounded-xl bg-white shadow-md shadow-black/5 min-w-[300px] w-[22%] py-8 px-12 hover:bg-sky-200 hover:cursor-pointer">
      <div className="img">
        <Image
          src={image}
          alt={title}
          height={120}
          width={120}
          className="rounded-full object-contain"
        />
      </div>
      <div className="title font-semibold text-2xl w-[80%] text-center">
        {title}
      </div>
      <div className="description font-light w-[80%] text-center">
        {description}
      </div>
      <div className="btn">
        {/* <Button name="Post" tailwindColor="bg-sky-500"/> */}
      </div>
    </div>
  );
}
