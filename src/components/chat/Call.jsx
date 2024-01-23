/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";

function Call({ name, setIsCalling }) {
    const image = useSelector((state) => state.user.img);

    return (
        <div className="relative">
            <div className="absolute rounded-[7px] p-2 w-[300px] h-[300px] right-0 top-7 bg-[#202C33]">
                <div className="p-2 w-full h-full text-white flex flex-col items-center justify-between">
                    <span className="flex flex-col justify-center items-center space-y-3">
                        <span>calling...</span>

                        <span className="text-xl font-semibold">{name}</span>
                    </span>

                    <img
                        src={image}
                        className="h-[100px] rounded-full"
                        alt="image nt found"
                    />

                    <button
                        className="bg-red-600 px-7 py-3 rounded-full"
                        onClick={() => setIsCalling(false)}
                    >
                        End Call
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Call;
