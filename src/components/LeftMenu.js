import React,{ useState } from 'react';
import Buttons from './Common/Buttons';
import { IoMdPeople } from "react-icons/io";
import { TbCircleDashed } from "react-icons/tb";
import { CiMenuKebab } from "react-icons/ci";
import { RiChatNewFill } from "react-icons/ri";
import { IoFilterSharp } from "react-icons/io5";
import { pp } from '../Assests/imgdata';
import Chats from './Chats';


function LeftMenu() {
  
    const [filters, setFilters] = useState(false);
    const[chats,setChats]=useState(true);
   
  
    return (
        
        <div className='flex flex-col border-r border-[#202d33] w-100 h-screen'>
            {/* {nav} */}
            <div className='flex justify-between items-center bg-[#202d33] h-[60px] p-2'>
                 <img className="rounded-full w-[45px] h-[45px] mr-5 cursor-pointer" src={pp} alt="profile_Picture" onClick={()=>setChats(!chats)} />
                 <div className='flex justify-between w-175px'>
                     <Buttons icon={<IoMdPeople/>} />
                     <Buttons icon={<TbCircleDashed />} />
                     <Buttons icon={<RiChatNewFill />} />
                     <Buttons icon={<CiMenuKebab/>} />
                 </div>
                
            
             </div>
              {/* {search} */}
              <div className='flex justify-between items-center h-[60px]'>
                 <input type="text" placeholder='Search or Start new chat'
                     className='rounded-lg bg-[#202d33] text-[#8796a1] text-sm font-light outline-none mx-2 px-4 py-2 w-[500px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light ' />
                <button className={`text-2xl  m-2 p-1 rounded-full ${filters ? 'bg-emerald-500 text-white rounded-full hover:bg-emerald-700' : 'text-[#8796a1] hover:bg-[#3c454c]"'}`}
                onClick={ ()=> {
                    setFilters(!filters);
                }}>
                     <IoFilterSharp />
                 </button>
            </div>
            {/* chats */}
            <Chats filter={filters} profile={chats } /> 
              </div>
    );
  }


export default LeftMenu;