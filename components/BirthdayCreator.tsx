"use client";
import Image from "next/image";
import CustomDatePicker from "./CustomDatePicker";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";
import Button from "./Button";
import { useState } from "react";
import { Bcard } from "@/types/type/type";
import {
  formattedToday,
} from "@/app/users/dashboard/postpool/lib/lib";
import { CldUploadButton } from "next-cloudinary";
import { toast } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { database } from "@/firebase";

export default function BirthdayCreator({
  selectedOption,
}: {
  selectedOption: any;
}) {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState(null);

  const [card, setCard] = useState<Bcard>({
    name: "",
    message: "",
    image: "",
    day: "",
    type: "",
    createdDate: "",
    history: {
      lastPosted: {
        date: "",
        time: "",
        groups: [],
      },
    },
  });

  const handleUpload = (result: any) => {
    console.log(result?.info?.secure_url);

    setUrl(result?.info?.secure_url);

    // axios.post('/api/upload',{
    //   image:result?.info?.secure_url,
    // })
  };
  const dateC = new Date();
  const formattedDate = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
  }).format(dateC);

  const dataRef = collection(database, "Post-Pool");
  const addClick = async () => {
    try {
      if (!name || !url || !selectedOption.value || !message) {
        toast.error("fill All field");
      } else {
        await addDoc(
          dataRef,

          {
            name: name,
            message: message,
            image: url,
            day: formattedDate,
            type: selectedOption?.value,
            createdDate: formattedToday(),
            history: {
              lastPosted: {
                date: "",
                time: "",
                groups: [],
              },
            },
          }
        );

        toast.success("Success");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 h-full p-6 rounded-xl">
        <div className="image-calendar flex justify-between gap-4">
          <CldUploadButton
            options={{ maxFiles: 1 }}
            onUpload={handleUpload}
            uploadPreset="ckq2avqm"
          >
            {url ? (
              <Image
                className="rounded-xl border border-1 border-sky-500 shadow-md shadow-black/5"
                src={url}
                alt="select image"
                width={250}
                height={250}
              />
            ) : (
              <Image
                className="rounded-xl border border-1 border-sky-500 shadow-md shadow-black/5"
                src={"/images/avatar.jpg"}
                alt="select image"
                width={250}
                height={250}
              />
            )}
          </CldUploadButton>

          <CustomDatePicker date={date} setDate={setDate} />
        </div>
        <div className="flex flex-col gap-4">
          <CustomInput placeholder="Name" setName={setName} name={name} />
          <CustomTextArea
            rows={4}
            placeholder="Write your caption here.."
            setMessage={setMessage}
            message={message}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            name="Create"
            tailwindColor="bg-sky-500"
            addClick={addClick}
          />
        </div>
      </div>
    </>
  );
}
