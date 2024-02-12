import React from 'react';

function Chatting({pp,contacts,msg,time,unreadMsgs,active}) {
 
  return (
      // {Main}
    <div className={`flex justify-between items-center cursor-pointer w-100 h-[85px] px-3 hover:bg-[#202d33] ${ active ? "bg-[#202d33]" : ""}`}>
      {/* {Profile picture} */}
        <img src={pp} alt="Profile picture" className='rounded-full w-[55px] h-[55px]  mr-5'/>
     
      <div className='flex justify-between border-t border-neutral-700 w-100 h-100 py-3'>
        <div className='flex flex-col align-middle justify-between  text-white  '>
           {/* info  */}
          <h5 className='font-medium'>{contacts}</h5>
          <p className={`text-md ${unreadMsgs ?"text-white" : "text-[#515253]" }`}>{msg}</p>
        </div>
           {/* time and msg */}
        <div className='flex flex-col justify-between items-end h-[100] text-xs'>
          <p className='text-emerald-500 min-[55px]'>{time}</p>
          {unreadMsgs && (
            <div className='flex justify-center align-middle items-center bg-emerald-500 w-[20px] h-[20px] rounded-full '>
           <span className='text-emerald-900 '> {unreadMsgs}</span>
          </div>)}
       
          </div>
        </div>
       </div>
      
    );
  }


export default Chatting;