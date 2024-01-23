import { FaLock } from "react-icons/fa";

function DisplayScreen() {
    return (
        <div className="flex flex-col justify-between h-screen mx-11">
            <div></div>
            <div className="text-white flex flex-col items-center">
                <img
                    src="/chat-screen-default-image.png"
                    alt="image not found"
                    className="h-40 w-60"
                />
                <h1 className="font-medium text-xl">
                    Download WhatsApp for Windows
                </h1>
                <p className="font-light text-xs text-center">
                    Make calls, share your screen and get a faster experience
                    when you download the Windows app.
                </p>

                <button className="mt-6 bg-[#06CF9C] py-2 px-5 text-xs rounded-full text-black">
                    Get the app
                </button>
            </div>
            <div className="flex items-center justify-center mb-7">
                <FaLock className="h-2" />
                <p className="text-xs">
                    Your personal messages are end-to-end encrypted
                </p>
            </div>
        </div>
    );
}

export default DisplayScreen;
