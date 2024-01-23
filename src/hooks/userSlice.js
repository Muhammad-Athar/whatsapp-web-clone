import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeUser: "",
    img: "",
    about: ":(",
    users: [],
    user: "",
    messages: [],
    senderId: "",
    recieverId: "",
    status: "idle",
    error: null,
};

// getting randomuser from random user generator api https://randomuser.me/api/

export async function getUser() {
    try {
        const response = await fetch(`https://randomuser.me/api/`);

        if (!response.ok) throw Error("Failed getting menu");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw new Error(error);
    }
}

// 658ee4bcae3b8e6e08e086f9
// 658ee4bcae3b8e6e08e086fa
// 6592a43568c2784febb361ce
// 6592a43568c2784febb361cf

export async function getUserDataFromExternalApi(senderId, receiverId) {
    try {
        const response = await fetch(
            `http://149.56.68.156:6060/api/chats?senderId=${senderId}&receiverId=${receiverId}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw new Error(error);
    }
}

export async function sendMessageToExternalAPi(receiverId, senderId, message) {
    try {
        const response = await fetch(
            `http://149.56.68.156:6060/api/chats?senderId=${senderId}&receiverId=${receiverId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    senderId: senderId,
                    receiverId: receiverId,
                    message: message,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Failed to post message");
        }

        const responseData = await response.json();
        // console.log(responseData);
        return responseData;
    } catch (error) {
        console.error("Error posting message:", error.message);
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserState: (state, action) => {
            state.user = action.payload;
            state.messages = action.payload.messages;
            state.senderId =
                action.payload.sender === "user" ? "user" : "other";
            state.recieverId =
                action.payload.sender === "user" ? "other" : "user";
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setActiveUser: (state, action) => {
            state.activeUser = action.payload.user;
            state.img = action.payload.img;
        },
        setUserAbout: (state, action) => {
            state.about = action.payload;
        },
    },
});

export const activeUser = (state) => state.user.activeUser;

export const { setUserState, setUsers, setActiveUser, setUserAbout } =
    userSlice.actions;

export default userSlice.reducer;
