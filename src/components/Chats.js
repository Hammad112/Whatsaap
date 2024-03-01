import React from 'react';
import Profilepage from "./Profilepage";
import Info   from "./Info";


function Chats({ filter,profile }) {
  return (
    //~ {Main}
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
      {/* Archived container */}
      {profile ? (<Profilepage filter={ filter} />) : ( <Info/> )}
     
    </div>
  );
}


export default Chats;