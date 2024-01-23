/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

function ChatDropdown({ setIsDropdownOpen }) {
    const [isInnerDropdownOpen, setIsInnerDropdownOpen] = useState(false);

    return (
        <div className="absolute w-[150px] top-[50px] right-[20px] rounded-[5px] bg-[#202C33] py-4 px-4">
            <ul className="space-y-2">
                <li>
                    <button>View contact</button>
                </li>
                <li>
                    <button>Report</button>
                </li>
                <li>
                    <button>Block</button>
                </li>
                <li>
                    <button>Search</button>
                </li>
                <li onClick={setIsDropdownOpen}>
                    <button>Close Chat</button>
                </li>
                <li>
                    <button>Mute notifications</button>
                </li>
                <li>
                    <button>
                        <span
                            className="flex items-center space-x-2"
                            // onClick={() =>
                            //     setIsInnerDropdownOpen(
                            //         (isInnerDropdownOpen) =>
                            //             !isInnerDropdownOpen
                            //     )
                            // }
                            onMouseEnter={() => setIsInnerDropdownOpen(true)}
                        >
                            <span>More</span>
                            <FaAngleRight
                                className={`${isInnerDropdownOpen && "hidden"}`}
                            />
                            <FaAngleDown
                                className={`${
                                    !isInnerDropdownOpen && "hidden"
                                }`}
                            />
                        </span>
                    </button>
                </li>
                {isInnerDropdownOpen && (
                    <ul
                        onMouseLeave={() => setIsInnerDropdownOpen(false)}
                        className="space-y-2 absolute right-[152px] top-[140px] w-[150px] bg-[#202C33] py-4 px-4 rounded-[5px]"
                    >
                        <li>
                            <button>Media, Links and docs</button>
                        </li>
                        <li>
                            <button>Clear chat</button>
                        </li>
                        <li>
                            <button>Export chat</button>
                        </li>
                        <li>
                            <button>Add shortcut</button>
                        </li>
                    </ul>
                )}
                <li>
                    <button>Lock Conversation</button>
                </li>
            </ul>
        </div>
    );
}

export default ChatDropdown;
