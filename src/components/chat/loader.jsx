import { getUserData } from "../../hooks/userSlice";

export const data = async (user) => {
    return await getUserData(user);
};
