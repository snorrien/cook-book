import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
    email: null,
    token: null,
    id: null
};

const userSlice = createSlice({
    name: "user",
    initialSlice,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
         },
    },
});

export const { setUser, removeUser } = userSlice.actions;
export default function reducer(state = userSlice, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }