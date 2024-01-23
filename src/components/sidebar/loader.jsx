import { getUser } from "../../hooks/userSlice";

const user1 = await getUser();
const user2 = await getUser();

export const user = [user1, user2];
