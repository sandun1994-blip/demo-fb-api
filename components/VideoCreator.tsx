"use client";
import AutomationOptions from "./AutomationOptions";
import Button from "./Button";
import CustomTextArea from "./CustomTextArea";

export default function VideoCreator() {
  return (
    <>
      <div className="flex flex-col gap-6 h-full p-6 rounded-xl">
        <div className="image-calendar flex justify-between gap-4">
          <div className="flex flex-col gap-4 w-[50%]">
            <video className="rounded-xl bg-slate-500" controls muted>
              <source src="/assets/videos/sample-video.mp4" />
            </video>
            {/* <Button name="Select video" tailwindColor="bg-sky-500" /> */}
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
  );
}
