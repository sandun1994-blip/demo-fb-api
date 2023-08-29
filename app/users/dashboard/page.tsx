'use client'
import { database } from "@/firebase";
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react"
import { CldImage, CldUploadButton, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { BsDatabaseSlash } from "react-icons/bs";



type Props = {}

const Dashboard = (props: Props) => {

  const dataRef = collection(database, "Post");

    const session =useSession()
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
  
    const handleFileChange = (event:any) => {
      setFile(event.target.files[0]);
      setFilename(event.target.files[0].name);
    }

//  console.log(session);

const addClick = async () => {
  try {
    await addDoc(dataRef, {
      
        name: "Nayomi Thakshila",
        message: "Happy Birthday Nayomi Thakshila 🍰❤️",
        image: "/images/dummy/nayomi-thakshila.jpg",
        postedDate:[
          {postid:"jjjpojpojpj",date:"23423"},
          {postid:"jjjpojpojpj",date:"23423"},
          {postid:"jjjpojpojpj",date:"23423"},
          {postid:"jjjpojpojpj",date:"23423"},
          {postid:"jjjpojpojpj",date:"23423"},
          {postid:"jjjpojpojpj",date:"23423"},
          {postid:"jjjpojpojpj",date:"23423"},
          {postid:"jjjpojpojpj",date:"23423"},
        ]
      }
    );
    toast.success("Success");
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong!");
  }
};
const [resource, setResource] = useState('');
const handleUpload=(result:any, widget:any)=>{
console.log(result?.info?.secure_url);
widget.close();
setFile(result?.info?.secure_url)

// axios.post('/api/upload',{
//   image:result?.info?.secure_url,
// })

}    




      return (
        <div>
            <button onClick={()=>signOut()}>LOG OUT</button>

           
<CldUploadButton options={{maxFiles:1}} onUpload={handleUpload} uploadPreset="ckq2avqm"  >
  upload
</CldUploadButton>

{/* <CldUploadButton uploadPreset="ckq2avqm" 
        
        onUpload={(result, widget) => {
          console.log(result);
          
          setFile(result?.info);
          widget.close();
        }}
        uploadPreset="next-cloudinary-unsigned"
      /> */}


<input  onChange={handleFileChange} />

<div><button onClick={addClick}>POST</button></div>
            
            

            
        </div>
      )
    }

export default Dashboard