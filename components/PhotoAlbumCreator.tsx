import Button from "./Button";
import Image from "next/image";
import CustomTextArea from "./CustomTextArea";
import AutomationOptions from "./AutomationOptions";


export default function PhotoAlbumCreator() {
  return (
    <>
    <div className="flex flex-col gap-6 h-full p-6 rounded-xl">
        <div className="image-calendar flex justify-between gap-4">
            <div className="flex flex-col gap-2">
          <Image
            className="rounded-xl border border-1 border-sky-500 shadow-md shadow-black/5"
            src="/assets/images/placeholder.jpg"
            alt="select image"
            width={250}
            height={250}
          />
          {/* <Button name="Add new image" tailwindColor="bg-sky-500" /> */}
            </div>
          <AutomationOptions />
        </div>
        <div className="flex flex-col gap-4">
          {/* <CustomTextArea rows={5} placeholder="Write your caption here.." /> */}
        </div>
        <div className="flex items-center justify-center">
          {/* <Button name="Create" tailwindColor="bg-sky-500" /> */}
        </div>
      </div>
    
    </>
  )
}
