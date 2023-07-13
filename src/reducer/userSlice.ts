import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    nickname: "",
    auth: 0,
  },
  reducers: {
    // login 성공 시
    userLogin: (state, action) => {
      // name, id에 API 값 받아오기
      state.name = action.payload.name;
      state.nickname = action.payload.nickname;
      state.auth = action.payload.auth;
      // state 변화를 알림
      return state;
    },
    // login 실패 시
    userClear: (state) => {
      // name, id 값을 비워줌.
      state.name = "";
      state.nickname = "";
      state.auth = 0;
      // state 변화를 알림
      return state;
    },
  },
});

export const { userLogin, userClear } = userSlice.actions;
export default userSlice.reducer;
