/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";

import { RxCross2 } from "react-icons/rx";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdLock, IoIosArrowForward, IoMdHeartDislike } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import EditAbout from "./EditAbout";

function ChatInfo({ setIscontactInfoOpen, setIsChatOpen }) {
    const [editAbout, setEditAbout] = useState(false);
    const [isDisappearingMessageActive, setIsDisappearingMessageActive] =
        useState(false);

    const userName = useSelector((state) => state.user.activeUser);
    const image = useSelector((state) => state.user.img);
    const about = useSelector((state) => state.user.about);

    return (
        <div className="w-full h-screen overflow-y-scroll">
            <div className="bg-[#202C33] text-white w-full flex items-center py-[10.5px] px-5 space-x-5">
                <RxCross2 onClick={() => setIscontactInfoOpen(false)} />
                <p>Contact Info</p>
            </div>
            <div className="bg-[#070c0f] space-y-2 text-white animate-slideInRight">
                <div className="flex flex-col items-center space-y-2 py-3 bg-[#111B21]">
                    <img
                        src={image}
                        alt="image not found"
                        className="h-[200px] w-[200px] border-none rounded-full"
                    />
                    <h1>{userName}</h1>
                </div>
                <div className="relative bg-[#111B21] px-5 py-1 flex items-center justify-between">
                    <div className="flex-col">
                        <span className="text-[12px]">About</span>
                        <p className="text-[10px] font-light">{about}</p>
                    </div>
                    <MdEdit onClick={() => setEditAbout(true)} />
                    {editAbout && <EditAbout setEditAbout={setEditAbout} />}
                </div>
                <div className="bg-[#111B21] px-5 py-1 flex items-center justify-between">
                    <span className="text-[12px] cursor-pointer">
                        Media, Links and Documents
                    </span>
                    <div className="flex items-center">
                        <span className="text-[11px] font-light">8</span>
                        <IoIosArrowForward className="text-[12px] cursor-pointer" />
                    </div>
                </div>
                <div className="bg-[#111B21] px-5 py-1 space-y-3">
                    <div className="text-[13px] flex items-center justify-between">
                        <div className="flex items-center space-x-4 cursor-pointer">
                            <FaStar className="text-[10px]" />
                            <span>Starred Messages</span>
                        </div>
                        <IoIosArrowForward className="text-[12px] cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <IoMdHeartDislike className="text-[10px] cursor-pointer" />
                            <div
                                className="flex flex-col cursor-pointer"
                                onClick={() =>
                                    setIsDisappearingMessageActive(
                                        (isDisappearingMessageActive) =>
                                            !isDisappearingMessageActive
                                    )
                                }
                            >
                                <span className="text-[13px] cursor-pointer">
                                    Disappearing messages
                                </span>
                                <span className="text-[10px] font-light">
                                    {isDisappearingMessageActive ? "on" : "off"}
                                </span>
                            </div>
                        </div>
                        <IoIosArrowForward
                            className="text-[12px] cursor-pointer"
                            onClick={() =>
                                setIsDisappearingMessageActive(
                                    (isDisappearingMessageActive) =>
                                        !isDisappearingMessageActive
                                )
                            }
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <IoMdLock className="text-[10px] cursor-pointer" />
                        <div className="cursor-pointer">
                            <h3 className="text-[13px] ">Encryption</h3>
                            <p className="text-[10px] font-light">
                                Messages are end-to-end encrypted. Click to
                                verify.
                            </p>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            setIscontactInfoOpen(false);
                            setIsChatOpen(false);
                        }}
                        className="flex items-center space-x-4 text-red-600"
                    >
                        <MdDelete className="text-[15px] cursor-pointer" />
                        <h1 className="text-[15px] cursor-pointer">
                            Delete chat
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatInfo;
