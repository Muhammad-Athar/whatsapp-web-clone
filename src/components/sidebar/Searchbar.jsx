import { useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function Searchbar() {
    const [search, setSearch] = useState("");
    const [isSearch, setIsSearch] = useState(false);

    function handelSearch() {
        setIsSearch((isSearch) => (isSearch = !isSearch));
    }

    function handelBack() {
        setIsSearch((isSearch) => (isSearch = !isSearch));
        setSearch("");
    }

    function handelSearching(e) {
        setIsSearch(true);
        setSearch(e.target.value);
    }

    return (
        <div className="flex items-center mx-5 my-2 focus:outline-none">
            <button className="bg-[#202c33] px-2 transition-all duration-300 py-1 rounded-s-full text-[14px] focus:outline-none">
                {isSearch ? (
                    <IoIosArrowRoundBack
                        onClick={handelBack}
                        className="text-[#06CF9C]"
                    />
                ) : (
                    <IoIosSearch
                        onClick={handelSearch}
                        className="text-white"
                    />
                )}
            </button>
            <input
                value={search}
                onChange={handelSearching}
                type="text"
                placeholder="search or start new chat"
                className="text-[9px] w-screen bg-[#202C33] px-2 py-1 rounded-e-full focus:outline-none"
            />
        </div>
    );
}

export default Searchbar;
