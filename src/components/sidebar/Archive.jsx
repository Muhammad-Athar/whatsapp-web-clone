import { IoMdArchive } from "react-icons/io";

function Archive() {
    return (
        <div className="flex items-center pb-4 space-x-6 px-3">
            <IoMdArchive className="text-[#06CF9C] text-xs" />
            <span className="text-xs">Archived</span>
        </div>
    );
}

export default Archive;
