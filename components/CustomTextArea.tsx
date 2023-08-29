import { Dispatch, SetStateAction } from "react";

interface CustomTextAreaProps {
  placeholder: string;
  rows:number;
  message:string
  setMessage:Dispatch<SetStateAction<string>>
}

export default function CustomTextArea({ placeholder,rows,message,setMessage }: CustomTextAreaProps) {
  return (
    <>
      <textarea
        placeholder={placeholder}
        rows={rows}
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        name="search"
        id="search"
        className="border w-full border-gray-300 rounded-2xl px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-md shadow-black/5"
      />
    </>
  );
}
