import ChatCard from './ChatCard';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function ChatList() {
  const allChats = useSelector(state => state.chat.allChats)
  const sortedAllChats = [...allChats].sort((a, b) =>
    a.msgs[a.msgs.length - 1].time < b.msgs[b.msgs.length - 1].time ? 1 : -1
  );
  const chattingUsers = useSelector(state => state.chat.chattingUsers);

  function findUserbyChat(item) {
    for (let i = 0; i < chattingUsers.length; i++) {
      if (chattingUsers[i].name === item.name) {
        return chattingUsers[i];
      }
    }
  }

  return (
    <StyledChatList>
      {Array.from(sortedAllChats).map(item =>
        <ChatCard user={findUserbyChat(item)} chat={item} />
      )}
    </StyledChatList>
  );
}

const StyledChatList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
