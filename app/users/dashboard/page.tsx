'use client'
import { signOut, useSession } from "next-auth/react"



type Props = {}

const Dashboard = (props: Props) => {

    const session =useSession()

//  console.log(session);
 
    
      return (
        <div>
            <button onClick={()=>signOut()}>LOG OUT</button>
        </div>
      )
    }

export default Dashboard