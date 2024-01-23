/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";

import Chat from "./Chat";
import moment from "moment/moment";

import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Archive from "./Archive";
import SidebarFooter from "./SidebarFooter";

import { setUsers } from "../../hooks/userSlice";
import { useEffect } from "react";

const users = [
    {
        id: "658ee4bcae3b8e6e08e086f9",
        name: "M. Athar",
        image: "/athar.jpg",
        text: "My name is Muhammad Athar. I am from Gujranwala",
        gender: "male",
    },
    {
        id: "658ee4bcae3b8e6e08e086fa",
        name: "Hassan",
        image: "/hassan.jpg",
        text: "My name is Hassan. I am from Lahore",
        gender: "male",
    },
];

function Sidebar({ setIsChatOpen, setIscontactInfoOpen, setIsCalling }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUsers(users));
    }, []);

    const isUsers = users.length === 0;

    return (
        <>
            <Navbar />
            <div className={`flex flex-col text-white h-[90dvh]`}>
                <Searchbar />
                <div className="overflow-y-scroll">
                    <Archive />
                    <>
                        {!isUsers ? (
                            users.map((user) => (
                                <Chat
                                    setIsCalling={setIsCalling}
                                    setIscontactInfoOpen={setIscontactInfoOpen}
                                    setIsChatOpen={setIsChatOpen}
                                    key={user.id}
                                    profile={user.image}
                                    popupImage={user.image}
                                    date={moment(new Date())
                                        .utc()
                                        .format("DD-MM-YYYY")}
                                    text={user.text || ""}
                                    name={user.name}
                                />
                            ))
                        ) : (
                            <p className="text-[12px] flex justify-center">
                                Start messaging your friends
                            </p>
                        )}
                    </>

                    <SidebarFooter />
                </div>
            </div>
        </>
    );
}

export default Sidebar;
