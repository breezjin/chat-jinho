import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LinesEllipsis from 'react-lines-ellipsis';
import PropTypes from 'prop-types';
import { selectCurrentUser } from '../features/chatSlice';
import styled from 'styled-components';

export default function ChatCard({ user, chat }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.chat.currentUser);
  const [isActive, setisActive] = useState(false);

  const lastChatMsg = chat.msgs[chat.msgs.length - 1].msg;
  const lastChatTime = chat.msgs[chat.msgs.length - 1].time;

  useEffect(() => {
    if (currentUser.name === user.name) {
      setisActive(true);
    } else {
      setisActive(false);
    }
  }, [currentUser, user])

  return (
    <StyledChatCard
      onClick={() => dispatch(selectCurrentUser(user))}
      active={isActive}
    >
      <div className='user'>
        <img
          className='user-avatar'
          src={user.avatar}
          alt="avatar"
        />
      </div>
      <div className='last-chat'>
        <div className='user-name'>
          {user.name}
          {isActive && <span className='user-chatting'>Chatting...</span>}
        </div>
        <div className='last-chat-msg'>
          <LinesEllipsis
            text={lastChatMsg}
            maxLine='1'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
        <div className='last-chat-time'>{lastChatTime}</div>
      </div>
    </StyledChatCard>
  );
}

ChatCard.propTypes = {
  user: PropTypes.object,
  chat: PropTypes.object,
};

const StyledChatCard = styled.div`
  width: 98%;
  border-radius: 0.6rem;
  box-shadow: 2px 2px 6px #dedede;
  margin: 0.5rem 0rem 0rem 0rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: beige;
  }

  .user {
    display: flex;
    align-items: center;
  }

  .user-avatar {
    width: 3rem;
    height: 3rem;
    background-color: gray;
    border-radius: 3rem;
    margin: 0.5rem 0rem 0.5rem 1rem;
  }

  .user-name {
    display: flex;
    align-items: center;
  }

  .user-chatting {
    font-size: x-small;
    color: #d01a29;
    margin: 0.1rem 0rem 0rem 0.5rem;
  }

  .last-chat {
    flex-grow: 1;
    margin: 0rem 1rem 0rem 1rem;
    display: flex;
    flex-direction: column;
  }

  .last-chat-msg {
    font-size: small;
  }

  .last-chat-time {
    font-size: xx-small;
  }
`;
