import { promises } from "dns";


interface ButtonProps {
  name: string;
  tailwindColor: string;
  addClick:()=>any
}
export default function Button({ name, tailwindColor,addClick }: ButtonProps) {

  return (
    <button
      type="button"
      onClick={addClick}
      className={
        "py-[10px] px-8 rounded-full text-white shadow-md shadow-black/5 " +tailwindColor}
    >
      {name}
    </button>
  );
}
