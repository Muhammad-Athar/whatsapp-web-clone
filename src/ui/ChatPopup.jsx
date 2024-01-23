function ChatPopup() {
    return (
        <div className="absolute top-[54px] z-[100] left-[80px] bg-[#233138] py-2 w-24 rounded-[2px] text-white">
            <div className="flex flex-col text-[7px]">
                <a href="#" className="hover:bg-[#111B21] px-3 py-1">
                    Archive Chat
                </a>
                <a href="#" className="hover:bg-[#111B21] px-3 py-1">
                    Mute Notifications
                </a>
                <a href="#" className="hover:bg-[#111B21] px-3 py-1">
                    Delete Chat
                </a>
                <a href="#" className="hover:bg-[#111B21] px-3 py-1">
                    Pin on Chat
                </a>
                <a href="#" className="hover:bg-[#111B21] px-3 py-1">
                    Mark as unread
                </a>
                <a href="#" className="hover:bg-[#111B21] px-3 py-1">
                    Block
                </a>
            </div>
        </div>
    );
}

export default ChatPopup;
