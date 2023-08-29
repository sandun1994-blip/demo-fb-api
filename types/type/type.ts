

type Group = {
    groupId: string ;
    postId: string;
  };
  


 type History ={
  lastPosted: {
    date: string
    time: string
    groups:Group[],
  },
 } 

export type Bcard ={
  name:string 
  message: string,
  image: string
  day:string,
  type: string,
  createdDate:string,
  history: History

}