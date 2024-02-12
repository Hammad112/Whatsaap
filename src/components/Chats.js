import React, { useState,useEffect } from 'react';
import { ImFolderDownload } from "react-icons/im";
import { chatsData } from '../Data/Whatsaapchats'
import Chatting from './Chatting';


function Chats({ filter }) {
  const [details, setDetail] = useState(chatsData);

  //~ Filtering the chat data based on search input
  //* The filter() method creates a new array filled with elements that pass a test provided by a function
  useEffect(() => {
    const newdetails = filter ? chatsData.filter((details) => details.unreadMsgs) : chatsData;
    setDetail(newdetails);
   },[filter])

  return (
    //~ {Main}
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
      {/* Archived container */}
      <div className="flex justify-between items-center w-100 min-h-[50px] px-3 hover:bg-[#202d33] ">
        <div className="flex justify-around items-center w-[150px]  ">
          <h3 className="text-emerald-500 text-md mr-4">
            <ImFolderDownload />
          </h3>
          <h5 className="text-white">Archived</h5>
        </div>
        <p className="text-emerald-500 text-xs font-light">7</p>
      </div>

      {/* {chats} */}
      {details.map((chat,i) => {
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
      })}
    </div>
  );
}


export default Chats;