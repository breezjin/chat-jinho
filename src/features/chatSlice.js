import { createSlice } from '@reduxjs/toolkit';
import presetChats from './data-chats.json';
import randomUsers from './data-users.json';

const initialState = {
  allUsers: [...randomUsers],
  chattingUsers: [],
  allChats: [...presetChats],
  currentUser: {}
}

for (let i = 0; i < initialState.allChats.length; i++) {
  for (let j = 0; j < initialState.allUsers.length; j++) {
    if (initialState.allChats[i].name === initialState.allUsers[j].name) {
      initialState.chattingUsers.push(initialState.allUsers[j]);
    }
  }
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    addMsg: (state, action) => {
      if (state.currentUser) {
        for (const user of state.chattingUsers) {
          if (user.name === state.currentUser.name) {
            for (const chat of state.allChats) {
              if (chat.name === state.currentUser.name) {
                chat.msgs.push(action.payload.sendingMsg);
              }
            }
            return;
          }
        }

        const newChat = {
          name: '',
          id: '',
          msgs: []
        }
        newChat.name = action.payload.user.name;
        newChat.id = action.payload.user.id;
        newChat.msgs.push(action.payload.sendingMsg);
        state.allChats.push(newChat);
        state.chattingUsers.push(action.payload.user);
      }
    },
  }
});

export const {
  selectCurrentUser,
  addMsg
} = chatSlice.actions;

export default chatSlice.reducer;
