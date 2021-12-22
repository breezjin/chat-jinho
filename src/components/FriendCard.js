import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from './atoms/Button';
import PropTypes from 'prop-types';
import { selectCurrentUser } from '../features/chatSlice';
import styled from 'styled-components';

export default function FriendCard({ user }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.chat.currentUser);
  const [isActive, setisActive] = useState(false);

  useEffect(() => {
    if (currentUser.name === user.name) {
      setisActive(true);
    } else {
      setisActive(false);
    }
  }, [currentUser, user])

  return (
    <StyledFriendCard>
      <div className='user'>
        <img
          className='user-avatar'
          src={user.avatar}
          alt={user.name}
        />
        <div className='user-name'>
          {user.name}
          {isActive && <span className='user-chatting'>Chatting...</span>}
        </div>
      </div>
      <div className='btn'>
        <Button onClick={() => dispatch(selectCurrentUser(user))}>채팅하기</Button>
      </div>
    </StyledFriendCard>
  );
}

FriendCard.propTypes = {
  user: PropTypes.object,
};

const StyledFriendCard = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  border-radius: 0.6rem;
  box-shadow: 2px 2px 6px #dedede;
  margin: 0.5rem 0rem 0rem 0rem;

  .user {
    flex-grow: 1;
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
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
  }

  .user-chatting {
    font-size: x-small;
    color: #d01a29;
    margin: 0.1rem 0rem 0rem 0.5rem;
  }

  .btn {
    margin-right: 1rem;
  }
`;
