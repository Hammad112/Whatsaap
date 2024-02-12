import React,{useState ,useEffect,useRef} from 'react';
import Button from './Common/Buttons';
import { IoMdSearch } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import img from '../Assests/images/chat1.jpg';
import { MdEmojiEmotions } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa6";
import Message from './Message';
import { messagesData  } from '../Data/Whatsaapchats';
import { IoMdSend } from "react-icons/io";


function ChatSide() {
  const [message, setMessages] = useState(messagesData);
  const [Type, setType] = useState(false);
  const inputRef = useRef(null);
  const bottom=useRef(null)

  //* Function to check for change in input when something is written
  const handlechanges = () => { 
    inputRef.current.value.length > 0 ? setType(true) : setType(false);
  }
  
  //* Add Messages
  const addMessage = (msg) => {
    const newMessages = [...message, msg];
    setMessages(newMessages);
  };
  // * Time Get
  const getTime = () => {
    return new Date()
      .toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .toLocaleLowerCase();
  };
  //* Send Message
  function Send(){
    if (inputRef.current.value.length > 0) {
      addMessage({
        msg: inputRef.current.value,
        time: getTime(),
        sent: true,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
      setType(false);
    }
  };

  // * Scrolling with new messages
  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: "smooth" });
   }, [message])

  // * Enter button to send message
  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") { Send() };
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  });

  // *emojii
  const emoji = () => {
    inputRef.current.value += "😀";
  }
  // *Upload
  const handleImgUpload = () => {
    addMessage({
      img: img,
      time: getTime(),
      sent: true,
    });
  };
  
  return (
    //Container
      <div className='flex flex-col h-screen'>
      {/* {Nav} */}
      <div className='flex justify-between  bg-[#202d33] h-[60px] p-2'>
        <div className='flex items-center'>
          <img
            className="rounded-full w-[45px] h-[45px] mr-5 "
            src={img}
            alt="profile_Picture" />
          
          <div className= 'flex flex-col'>
            <span className="text-white font-medium ">Coding Soft</span>
            <span className="text-[#8796a1] text-xs">online</span>
          </div>
        </div>
        
        <div className='flex justify-between  w-[125px]'>
          <Button icon={ <IoCall/>} />
          <Button icon={<IoMdSearch /> }/>
          <Button icon={<BsThreeDotsVertical  /> } />
        </div>
      </div>
      {/* Message */}
      {/*  bg-[url('')] bg-contain  */}
      <div
        className='bg-[#0a131a] h-100 overflow-scroll '
        style={{ padding:"12px 7%"}}
      >
       {message.map((msg,index) => (
         <Message
                       key={index}
                       msg={msg.msg}
                       time={msg.time}
                       img={msg.img}
                       isLink={msg.isLink}
                       sent={msg.sent}
         />
       ))}
        <div ref={bottom}></div>
      </div>
    {/* bottom */}
      <div className='flex items-center p-3 bg-[#202d33] w-100 h-[70px]'>
        {/* emoji */}
        <Button icon={<MdEmojiEmotions onClick={emoji}/>} />
        {/* add */}
        <Button icon={<FaPlus onClick={handleImgUpload}/>}/>
        {/* inout */}
        <input type="text"
          placeholder='Text'
          className='bg-[#2c3943]  rounded-lg outline-none text-sm text-neutral-200 h-100 w-100 px-3 placeholder:text-sm placeholder:text-[#8796a1]'
          ref={inputRef}
          onChange={handlechanges}
        />
        {/* mic */}
        <span className='ml-2'>    
        {Type ? (<Button icon={<IoMdSend onClick={Send} /> }  /> ) :
          ( <Button icon={<FaMicrophone />}  />)
       }
        </span>
        
      </div>
       
      </div>
    );
  }


export default ChatSide;