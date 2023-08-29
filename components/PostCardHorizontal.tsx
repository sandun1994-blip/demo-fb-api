"use client";

interface PostCardHorizontalProps {
  title: string;
  description: string;
  media: string;
  createdDate: string;
  type: string;
}
import Image from "next/image";

import TypeIcon from "./TypeIcon";
import Button from "./Button";

export default function PostCardHorizontal({
  title,
  description,
  media,
  createdDate,
  type,
}: PostCardHorizontalProps) {
  return (
    <>
      <div className="card flex gap-4 items-center justify-between rounded-xl bg-white shadow-md shadow-black/5 min-w-[300px] w-full py-2 px-12 hover:bg-sky-200 hover:cursor-pointer">
        <div className="cont flex items-center gap-6">
          <Image
            src={media}
            alt={title}
            height={120}
            width={120}
            className="rounded-full object-contain"
          />
          <div className="cont">
            <TypeIcon type={type} />
            <div className="title font-semibold text-2xl">{title}</div>
            <div className="description ">
              <p className="font-light">{description}</p>
              <p className="text-xs text-gray-400">
                Created on : {createdDate}
              </p>
            </div>
          </div>
        </div>
        <div className="btn">
          {/* <Button name="Edit" tailwindColor="bg-sky-500" /> */}
        </div>
      </div>
    </>
  );
}
