/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getUserDataFromExternalApi,
    setUserState,
} from "../../hooks/userSlice";

import { reverseChat } from "../../ui/reverseChat";

import ChatNavbar from "./ChatNavbar";
import ChatScreenMessageSender from "./ChatScreenMessageSender";
import DisplayMessages from "../messages/DisplayMessages";

// 658ee4bcae3b8e6e08e086f9
// 658ee4bcae3b8e6e08e086fa
// 6592a43568c2784febb361ce
// 6592a43568c2784febb361cf

function ChatScreen({
    setIsChatOpen,
    setIscontactInfoOpen,
    isCalling,
    setIsCalling,
}) {
    const [userData, setUserData] = useState([]);
    const [isNewMessge, setIsNewMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    const activeUser = useSelector((state) => state.user.activeUser);

    const user = activeUser;

    const receiverId = "658ee4bcae3b8e6e08e086fa";
    const senderId = "658ee4bcae3b8e6e08e086f9";

    useEffect(
        function () {
            getUserDataFromExternalApi(receiverId, senderId)
                .then((res) => {
                    setUserData(reverseChat(res));
                    isNewMessge === true && setIsNewMessage(false);
                    dispatch(
                        setUserState({
                            user: user,
                            messages: res,
                            sender: "user1",
                            reciever: "user2",
                        })
                    );
                })
                .catch((error) => {
                    console.log("Error resolving Promise");
                    throw new Error(error);
                })
                .finally(() => setIsLoading(false));
        },
        [dispatch, user, isNewMessge]
    );

    return (
        <div
            className="bg-center h-screen"
            style={{ backgroundImage: 'url("/whatsapp-bg-image.jpg")' }}
        >
            <div
                className="grid grid-rows-3 h-screen text-white"
                style={{ gridTemplateRows: "45px 1fr 50px" }}
            >
                <ChatNavbar
                    isCalling={isCalling}
                    setIsCalling={setIsCalling}
                    setIsChatOpen={setIsChatOpen}
                    setIscontactInfoOpen={setIscontactInfoOpen}
                />
                <div className="h-auto overflow-y-scroll text-[12px]">
                    <div className={`p-4 md:p-8`}>
                        {isLoading ? (
                            <p className="animate-pulse flex justify-center items-center ">
                                loading...
                            </p>
                        ) : userData ? (
                            userData.map((message) => (
                                <DisplayMessages
                                    key={message._id}
                                    data={message}
                                />
                            ))
                        ) : (
                            <p>no message found</p>
                        )}
                    </div>
                </div>
                <ChatScreenMessageSender setIsNewMessage={setIsNewMessage} />
            </div>
        </div>
    );
}

export default ChatScreen;
