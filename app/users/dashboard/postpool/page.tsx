"use client";

import BirthdayCreator from "@/components/BirthdayCreator";
import PhotoAlbumCreator from "@/components/PhotoAlbumCreator";
import PhotoCreator from "@/components/PhotoCreator";
import PostCardHorizontal from "@/components/PostCardHorizontal";
import SelectComp from "@/components/SelectComp";
import SerchBar from "@/components/SerchBar";
import VideoCreator from "@/components/VideoCreator";
import { database } from "@/firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";


interface GroupPost {
  groupId: string;
  postId: string;
}

interface History {
  lastPosted: {
    date: string;
    time: string;
    groups: GroupPost[];
  };
}

interface Card {
  id: number;
  name?: string;
  message?: string;
  image?: string;
  type?: string;
  day?: string;
  createdDate?: string;
  history?: History;
}

export default function PostPool() {

  
  const [selectOption, setSelectOption] = useState(null);

  const [cards,setCard] =useState([])

  const dataRef = collection(database, "Post-Pool");
useEffect(()=>{
const getData=async()=>{
  try {
    const unsub =  onSnapshot(dataRef, (snapShot) => {
let post:any =[]
snapShot.docs.forEach((doc)=>{
  post.push({...doc.data(),id:doc.id})
})
setCard(post)
      console.log("Current data: ", post);
  })
  } catch (error) {
    console.log(error);
    
  }
}

getData()
},[])





  // const cards: Card[] = [
  //   {
  //     id: 1,
  //     name: "Nayomi Thakshila",
  //     message: "Happy Birthday Nayomi Thakshila 🍰❤️",
  //     image: "/assets/images/nayomi-thakshila.jpg",
  //     day: "Sep-14",
  //     type: "birthday",
  //     createdDate: "2020-Aug-01",
  //     history: {
  //       lastPosted: {
  //         date: "2023-Jul-23",
  //         time: "13:20",
  //         groups: [
  //           { groupId: "11111", postId: "1524341" },
  //           { groupId: "22222", postId: "5785676" },
  //           { groupId: "22222", postId: "5897999" },
  //         ],
  //       },
  //     },
  //   },
  
  // ];

  const [postType, setPostType] = useState<string>("birthday");
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setPostType(e.target.value);
  };


 
  return (
    <>
      <div className="searchbar-container flex w-screen p-4">
        <SerchBar />
      </div>
      <div className="grid-container flex w-screen px-4 pb-4">
        <div className="grid grid-cols-9 grid-rows-5 gap-4 w-screen">
          <div className="col-span-3 row-span-5 bg-white p-2 shadow-md shadow-black/5 rounded-xl flex flex-col gap-4 h-[75vh]">
            <div className="post-type-picker">
              <label
                htmlFor="countries"
                className="block p-4 text-md font-medium text-gray-900"
              >
                Select an option
              </label>
              <div className="w-[300px]">
              <SelectComp
                id={"select-one"}
                selectedOption={selectOption}
                setSelectOption={setSelectOption}
                catagory={[
                  { value: "Birthday", label: "Birthday", color: '#FF8B00'  },
                  { value: "Photo", label: "Photo", color: '#5243AA' },
                  { value: "Photo-Album", label: "Photo Album" , color: '#00B8D9'},
                  { value: "Video", label: "Video", color: '#666666' },
                ]}
              />
              </div>
             
              {/* <select
                onChange={handleSelect}
                id="posttypes"
                className="border border-gray-300 rounded-full px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 block w-[50%] p-2.5 shadow-md shadow-black/5"
              >
                <option selected value="birthday">
                  Birthday
                </option>
                <option value="photo">Photo</option>
                <option value="photo-album">Photo Album</option>
                <option value="video">Video</option>
              </select> */}
            </div>

            {
              <BirthdayCreator  selectedOption={selectOption} />
            }
          </div>
          <div className="flex flex-col gap-2 col-span-6 row-span-5 col-start-4 bg-sky-50 p-2 shadow-md shadow-black/5 rounded-xl h-[75vh] overflow-y-scroll">
            {cards.length>0 && cards?.map((card:any) => (
              <PostCardHorizontal
                title={card?.name}
                type={card?.type}
                description={card?.message}
                media={card?.image}
                createdDate={card?.createdDate}
                key={card?.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
