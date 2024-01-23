import { useState } from "react";

import Sidebar from "../components/sidebar/Sidebar";
import ChatScreen from "../components/chat/ChatScreen";
import DisplayScreen from "../components/chat/DisplayScreen";
import ChatInfo from "../components/chatInfo/ChatInfo";

function Homepage() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [iscontactInfoOpen, setIscontactInfoOpen] = useState(false);
    const [isCalling, setIsCalling] = useState(false);

    return (
        <div className="bg-[#0C1317] relative">
            <div className="flex md:mx-0 lg:mx-[200px] ">
                <div className="w-[30%] md:w-[20%] overflow-hidden bg-[#111B21] h-screen z-50 border-r-[0.1px] border-[#454545]">
                    <Sidebar
                        setIsCalling={setIsCalling}
                        setIsChatOpen={setIsChatOpen}
                        setIscontactInfoOpen={setIscontactInfoOpen}
                    />
                </div>
                <div className="w-[70%] md:w-[80%] bg-[#222E35] h-screen">
                    {isChatOpen ? (
                        <div>
                            {iscontactInfoOpen && (
                                <ChatInfo
                                    setIscontactInfoOpen={setIscontactInfoOpen}
                                    setIsChatOpen={setIsChatOpen}
                                />
                            )}
                            {!iscontactInfoOpen && (
                                <ChatScreen
                                    isCalling={isCalling}
                                    setIsCalling={setIsCalling}
                                    setIsChatOpen={setIsChatOpen}
                                    setIscontactInfoOpen={setIscontactInfoOpen}
                                />
                            )}
                        </div>
                    ) : (
                        <DisplayScreen />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Homepage;
