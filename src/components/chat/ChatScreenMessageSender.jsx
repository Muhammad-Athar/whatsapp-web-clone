/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { sendMessageToExternalAPi } from "../../hooks/userSlice";

import { IoMdAdd } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

// 658ee4bcae3b8e6e08e086f9
// 658ee4bcae3b8e6e08e086f9
// 6592a43568c2784febb361ce
// 6592a43568c2784febb361cf

function swapIDS(senderId, receiverId) {
    const sender = receiverId;
    const receiver = senderId;

    return { sender, receiver };
}

function ChatScreenMessageSender({ setIsNewMessage }) {
    const [message, setMessage] = useState("");
    const [senderId, setSenderId] = useState("658ee4bcae3b8e6e08e086f9");
    const [recieverId, setRecieverId] = useState("658ee4bcae3b8e6e08e086fa");
    const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });

    useEffect(
        function () {
            if (isRecording) {
                const interval = setInterval(() => {
                    setTimer((state) => {
                        const seconds =
                            state.seconds === 59 ? 0 : state.seconds + 1;
                        const minutes =
                            state.seconds === 59
                                ? state.minutes + 1
                                : state.minutes;

                        return { minutes, seconds };
                    });
                }, 1000);

                return () => clearInterval(interval);
            }
        },
        [timer, isRecording]
    );

    function handelTimer() {
        setIsMicrophoneActive((isMicrophoneActive) => !isMicrophoneActive);
        setTimer({ minutes: 0, seconds: 0 });
        setIsRecording((isRecording) => !isRecording);
    }

    function handelSubmit() {
        if (message.trim === "") return;

        sendMessageToExternalAPi(senderId, recieverId, message);
        setMessage("");
        setIsNewMessage(true);
        const { sender, receiver } = swapIDS(senderId, recieverId);
        setSenderId(sender), setRecieverId(receiver);
    }

    return (
        <div className="bg-[#202C33] px-5 flex justify-between items-center">
            {!isMicrophoneActive && (
                <>
                    <IoMdAdd />

                    <div className="flex items-center w-[80%]">
                        <span className="bg-[#2A3942] border-2 rounded-s-full border-r-0 text-base py-[5px] px-3 text-white border-[#1f262a]">
                            <MdOutlineEmojiEmotions />
                        </span>

                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            autoFocus
                            type="text"
                            placeholder=" Type a message"
                            className="bg-[#2A3942] border-2 w-full text-[11px] py-[5px]  rounded-e-full border-l-0 border-[#1f262a] focus:outline-none"
                            onKeyDown={(e) =>
                                e.key === "Enter" && handelSubmit()
                            }
                        />
                    </div>
                    <IoSendSharp
                        onClick={handelSubmit}
                        className={`${message && "text-[#06CF9C]"}`}
                    />
                </>
            )}

            {isMicrophoneActive && (
                <>
                    <MdDelete onClick={handelTimer} />
                    <span>
                        {String(timer.minutes).padStart(2, "0")}:
                        {String(timer.seconds).padStart(2, "0")}
                    </span>
                </>
            )}

            <FaMicrophone
                className={`${isMicrophoneActive && "text-[#06CF9C]"}`}
                onClick={handelTimer}
            />
        </div>
    );
}

export default ChatScreenMessageSender;
