/* eslint-disable react/prop-types */

// import { FaAngleDown } from "react-icons/fa";

function DisplayMessages({ data }) {
    const isUser = data?.sender.username === "user1";

    return (
        <div
            className={`flex items-center space-x-2 ${
                isUser ? "justify-end " : "justify-start"
            } mb-1`}
        >
            {/* <FaAngleDown /> */}

            <div
                className={`rounded-lg p-2 ${
                    isUser
                        ? "bg-[#005C4B] text-gray-50"
                        : "bg-[#202C33] text-gray-400"
                }`}
            >
                {data?.text}
            </div>
        </div>
    );
}

export default DisplayMessages;
