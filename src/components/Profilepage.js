import React, { useState,useEffect } from 'react';
import { ImFolderDownload } from "react-icons/im";
import { chatsData } from '../Data/Whatsaapchats'
import Chatting from './Chatting';
import { Arch } from "../Data/Whatsaapchats";


export default function Profilepage({ filter }) {
    const [details, setDetail] = useState(chatsData);
  const [Arche, setArche] = useState(Arch);
  const [arc,setarc]=useState(false)

 
  //~ Filtering the chat data based on search input
  //* The filter() method creates a new array filled with elements that pass a test provided by a function
  useEffect(() => {
    const newdetails = filter ? chatsData.filter((details) => details.unreadMsgs) : chatsData;
    setDetail(newdetails);
  }, [filter])
    
  return (
      <div>
          <div className="flex justify-between items-center w-100 min-h-[50px] px-3 hover:bg-[#202d33] "  onClick={()=>setarc(!arc)}>
        <div className="flex justify-around items-center w-[150px] " >
          <h3 className="text-emerald-500 text-md mr-4">
           <button > <ImFolderDownload /></button> 
          </h3>
          <h5 className="text-white">Archived</h5>
        </div>
        <p className="text-emerald-500 text-xs font-light">5</p>
      </div>

      {/* {chats} */}
      { !arc ? (
      details.map((chat,i) => {
        return(
          <Chatting
            key={i}
          pp={chat.pp1}
          contacts={chat.contact}
          msg={chat.msg}
          time={chat.time}
            unreadMsgs={chat.unreadMsgs}
            active={i===0}
          />
        )
      })) : (
        Arch.map((chat,i) => {
          return(
            <Chatting
              key={i}
            pp={chat.pp1}
            contacts={chat.contact}
            msg={chat.msg}
            time={chat.time}
              unreadMsgs={chat.unreadMsgs}
              active={i===0}
            />
          )
        })
          
      )
    }
      
    </div>
  )
}
