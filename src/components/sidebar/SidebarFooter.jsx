import { FaLock } from "react-icons/fa";

function SidebarFooter() {
    return (
        <div>
            <hr className="w-[95%] mx-auto my-2 border-[#2f2f2f]" />
            <div className="flex items-center justify-center">
                <FaLock className="h-2" />
                <p className="text-[7px]  ">
                    Your personal messages are
                    <a href="#" className="mx-1 text-[#6eafe5]">
                        end-to-end encrypted
                    </a>
                </p>
            </div>
        </div>
    );
}

export default SidebarFooter;
