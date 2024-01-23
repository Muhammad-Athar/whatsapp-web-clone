/* eslint-disable react/prop-types */

import { useState } from "react";

import { FaAngleDown } from "react-icons/fa";

import ChatPopup from "../../ui/ChatPopup";
import { useDispatch, useSelector } from "react-redux";
import { activeUser, setActiveUser } from "../../hooks/userSlice";

function Chat({
    name,
    profile,
    date,
    text,
    setIsChatOpen,
    setIscontactInfoOpen,
}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const messages = useSelector((state) => state.user.messages);

    const dispatch = useDispatch();

    function handelIsOpen() {
        setIsPopupOpen((isPopupOpen) => isPopupOpen != isPopupOpen);
    }

    function handelOpenChat() {
        setIsChatOpen(true);
        dispatch(setActiveUser(name));
        setIscontactInfoOpen(false);
        dispatch(
            setActiveUser({
                user: name,
                img: profile,
            })
        );
    }

    return (
        <div className="flex relative justify-center space-x-3 items-center px-1 cursor-pointer">
            <div>
                <img
                    src={profile}
                    alt="image not found"
                    className="h-[30px] w-[30px] border-none rounded-full"
                />
            </div>

            <div
                onClick={handelOpenChat}
                className="flex justify-between items-center w-[80%] py-[6px] border-t border-[#4e4e4e] relative"
            >
                <div className="flex flex-col w-[60%]">
                    <h1 className="text-[12px]">{name}</h1>
                    <span className="text-[7px] truncate ">{text}</span>
                </div>
                <div
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="flex flex-col items-end space-y-1"
                >
                    <span className="text-[7px]">{date}</span>
                    <div className="flex items-center space-x-1">
                        {!messages.length === 0 && (
                            <button className="text-[8px] bg-[#00A884] rounded-full px-2">
                                {messages.length}
                            </button>
                        )}
                        {isDropdownOpen && (
                            <FaAngleDown
                                className="text-[7px]"
                                onClick={handelIsOpen}
                            />
                        )}
                    </div>
                    {isPopupOpen && <ChatPopup />}
                </div>
            </div>
        </div>
    );
}

export default Chat;
