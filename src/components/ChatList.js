import ChatCard from './ChatCard';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function ChatList() {
  const { allChats, chattingUsers } = useSelector(state => state.chat)
  const sortedAllChats = [...allChats].sort((a, b) =>
    a.msgs[a.msgs.length - 1].time < b.msgs[b.msgs.length - 1].time ? 1 : -1
  );

  function findUserByChat(chat) {
    for (let i = 0; i < chattingUsers.length; i++) {
      if (chattingUsers[i].name === chat.name) {
        return chattingUsers[i];
      }
    }
  }

  return (
    <StyledChatList>
      {Array.from(sortedAllChats).map(chat =>
        <ChatCard key={chat.id} user={findUserByChat(chat)} chat={chat} />
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
