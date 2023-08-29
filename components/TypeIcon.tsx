interface TypeIconProps {
  type: string;
}

import { HiCake,HiPhotograph,HiFilm,HiCollection } from "react-icons/hi";
export default function TypeIcon({ type }: TypeIconProps) {
  return (
    <>
      {type === "birthday" ? (
        <HiCake className="text-rose-500 text-2xl" />
      ) : type === "photo" ? (
        <HiPhotograph className="text-rose-500 text-2xl" />
      ) : type === "photo-album" ? (
        <HiCollection className="text-rose-500 text-2xl" />
      ) : type === "video" ? (
        <HiFilm className="text-rose-500 text-2xl" />
      ) : (
        ""
      )}
    </>
  );
}
