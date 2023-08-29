import { Dispatch, SetStateAction } from "react";

interface CustomInputProps {
  placeholder: string;
  name:string
  setName:Dispatch<SetStateAction<string>>
}

export default function CustomInput({ placeholder,name,setName }: CustomInputProps) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        name="search"
        id="search"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="border w-full border-gray-300 rounded-2xl px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-md shadow-black/5"
      />
    </>
  );
}
