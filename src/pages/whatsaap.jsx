import React from "react";
import LeftMenu from "../components/LeftMenu";
import ChatSide from "../components/ChatSide";

const whatsaap = () => {
    return (
        <div className="w-screen h-screen overflow-hidden bg-[#111a21]">
            <div className="flex justify-start whatsaap-bp:justify-center items-center bg-[#111a21] h-screen">
                <div className="bg-[#111a21] min-w-[340px] max-w-[550px] w-100 h-100">
                    <LeftMenu />
                </div>
                <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] h-100 w-100">
                    <ChatSide />
                </div>
            </div>
        </div>
    );
};

export default whatsaap;




