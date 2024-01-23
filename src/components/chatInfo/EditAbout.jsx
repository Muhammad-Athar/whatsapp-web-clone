/* eslint-disable react/prop-types */

import { setUserAbout } from "../../hooks/userSlice";
import { useState } from "react";

import { useDispatch } from "react-redux";

function EditAbout({ setEditAbout }) {
    const [about, setAbout] = useState("");

    const dispatch = useDispatch();

    function handelClick() {
        setEditAbout(false);
        dispatch(setUserAbout(about));
    }

    return (
        <div className="absolute top-2 w-[90%]">
            <input
                type="text"
                autoFocus
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                onKeyDown={(e) =>
                    e.key === "Enter" || e.key === "Escape"
                        ? handelClick()
                        : null
                }
                className="text-[9px] w-full bg-[#202C33] px-4 py-3 rounded-full focus:outline-none"
            />
        </div>
    );
}

export default EditAbout;
