import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        userAdded(state, action) {
            state.push({
                email: action.payload.email,
                accessToken: action.payload.accessToken,
                uid: action.payload.uid
            })
        }
    },
});

export const { userAdded } = usersSlice.actions
export default usersSlice.reducer