/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

import { IoVideocam } from "react-icons/io5";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdArrowRoundBack } from "react-icons/io";

import ChatDropdown from "./ChatDropdown";
import Call from "./Call";
import { useSelector } from "react-redux";

function ChatNavbar({
    isCalling,
    setIsCalling,
    setIsChatOpen,
    setIscontactInfoOpen,
}) {
    const [search, setSearch] = useState("");
    const [headertextShowing, setHeaderTextShowing] = useState(true);
    const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const userName = useSelector((state) => state.user.activeUser);
    const image = useSelector((state) => state.user.img);

    useEffect(function () {
        let time = setTimeout(() => {
            setHeaderTextShowing(false);
        }, 2000);

        return () => clearTimeout(time);
    }, []);

    function handelSearch() {
        setIsSearchbarOpen(false);
        setSearch("");
    }

    return (
        <div className="bg-[#202C33] px-5 flex justify-between items-center">
            <div className="flex items-center space-x-3">
                <span
                    className="cursor-pointer"
                    onClick={() => setIsChatOpen(false)}
                >
                    <IoMdArrowRoundBack />
                </span>

                <div
                    onClick={() => setIscontactInfoOpen(true)}
                    className="cursor-pointer flex items-center space-x-2"
                >
                    <img
                        src={image}
                        alt="image not found"
                        className="h-[30px] w-[30px] border-none rounded-full"
                    />
                    <div className="flex flex-col">
                        <h1
                            className={`${
                                !headertextShowing && "text-[15px]"
                            } text-[12px] font-medium`}
                        >
                            {userName}
                        </h1>
                        {headertextShowing && (
                            <p className="text-[12px] font-extralight">
                                click for contact info
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex relative items-center space-x-7 text-[12px]">
                <button
                    onClick={() => setIsCalling(true)}
                    className={`${
                        isCalling && "text-[#ffffff]"
                    } flex items-center space-x-2 border border-[#28343B] text-[#4a5961] p-2 rounded-full`}
                >
                    <IoVideocam />
                    <FaAngleDown />
                </button>

                {isCalling && (
                    <Call name={"Muhammad Athar"} setIsCalling={setIsCalling} />
                )}

                <FaSearch
                    className={`${
                        isSearchbarOpen && "text-[#405258]"
                    } relative cursor-pointer`}
                    onClick={() =>
                        setIsSearchbarOpen(
                            (isSearchbarOpen) => !isSearchbarOpen
                        )
                    }
                />

                {isSearchbarOpen && (
                    <input
                        type="text"
                        autoFocus
                        defaultValue={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="absolute top-[45px] right-[10px] bg-[#1e282e] rounded-full text-[8px] p-3 w-[150px] focus:outline-none focus:outline-[#202C33]"
                        onKeyDown={(e) =>
                            e.key === "Escape" || e.key === "Enter"
                                ? handelSearch()
                                : null
                        }
                    />
                )}

                <CiMenuKebab
                    className={`${
                        isDropdownOpen && "text-[#405258]"
                    } relative cursor-pointer`}
                    onClick={() =>
                        setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen)
                    }
                />

                {isDropdownOpen && (
                    <ChatDropdown
                        setIsDropdownOpen={() =>
                            setIsDropdownOpen(
                                (isDropdownOpen) => !isDropdownOpen
                            )
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default ChatNavbar;
