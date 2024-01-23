import { CgCommunity } from "react-icons/cg";
import { CiMenuKebab } from "react-icons/ci";
import { HiStatusOnline } from "react-icons/hi";
import { LuMessageSquarePlus } from "react-icons/lu";

function Navbar() {
    return (
        <>
            <div className="bg-[#202C33] p-2 flex justify-between items-center">
                <img
                    src="/athar.jpg"
                    alt="image not found"
                    className="h-[30px] w-[30px] border-none rounded-full"
                />
                <div className="text-white flex space-x-4 ">
                    <CgCommunity />
                    <HiStatusOnline />
                    <LuMessageSquarePlus />
                    <CiMenuKebab />
                </div>
            </div>
        </>
    );
}

export default Navbar;
