interface GroupItemProps {
  id: number;
  name: string;
  image: string;
}
import Image from "next/image";

export default function GroupItem({ id, name, image }: GroupItemProps) {
  return (
    <div
      id={id.toString()}
      className="flex items-center gap-3 bg-white w-full p-2 rounded-xl border border-zinc-100 shadow-md shadow-black/5 hover:bg-sky-200 hover:cursor-pointer"
    >
      <Image
        src={image}
        alt={name}
        width={50}
        height={50}
        className="rounded-full object-contain"
      />
      <span>{name}</span>
    </div>
  );
}
