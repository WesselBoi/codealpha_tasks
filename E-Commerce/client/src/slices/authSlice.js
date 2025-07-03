import { createSlice } from "@reduxjs/toolkit";

// Helper function to get user info from localStorage
const getUserFromStorage = () => {
  try {
    const userInfo = localStorage.getItem("userInfo");
    return userInfo ? JSON.parse(userInfo) : null;
  } catch (error) {
    console.error("Error parsing userInfo from localStorage:", error);
    localStorage.removeItem("userInfo"); // Clear corrupted data
    return null;
  }
};

//Starting state - like an empty membership database
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //When user logs in successfully
    setLoginCredentials: (state, action) => {
      state.userInfo = action.payload; //Save user info in state
      state.isAuthenticated = true; //Mark as logged in
      localStorage.setItem("userInfo", JSON.stringify(action.payload)); //Save user info in localStorage
    },

    //When user registers successfully
    setRegisterCredentials: (state, action) => {
      state.userInfo = action.payload;
    },

    //When user logs out
    logout: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
      localStorage.removeItem("userInfo"); //Remove user info from localStorage
      localStorage.removeItem("cartItems"); // Clear cart too
    },
  },
});

// Export actions (the commands you can send)
export const { setLoginCredentials , setRegisterCredentials , logout } = authSlice.actions;

// Export reducer (the worker that processes commands)
export default authSlice.reducer;
