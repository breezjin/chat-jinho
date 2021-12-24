import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../atoms/Button';
import { addMsg } from '../../features/chatSlice';
import dayjs from 'dayjs';
import styled from 'styled-components';

export default function MsgBar() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.chat.currentUser);
  const sendingChatFormat = {
    user: currentUser,
    sendingMsg: {
      name: '윤진호',
      id: 'breezjin',
      msg: '',
      time: dayjs().format('YYYY.MM.DD HH:mm:ss')
    }
  }

  const [inputValue, setInputValue] = useState('');

  function sendMsg(event) {
    event.preventDefault();
    if (inputValue !== '' && currentUser.name) {
      const newMsg = {...sendingChatFormat};
      newMsg.sendingMsg.msg = inputValue;
      dispatch(addMsg(newMsg));
      setInputValue('');
    }
  }

  return (
    <StyledMsgBar
      onSubmit={e => sendMsg(e)}
    >
      <input
        name='msg'
        type="text"
        placeholder='채팅 메시지를 입력하세요.'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={currentUser.name ? false : true}
      />
      <Button
        type='submit'
        disabled={currentUser.name ? false : true}
      >
        보내기
      </Button>
    </StyledMsgBar>
  );
}

const StyledMsgBar = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;

  textarea, input {
    height: 1.5rem;
    flex-grow: 1;
    max-height: 4rem;
    overflow-wrap: break-word;
    padding: 0.4rem;
    border-color: #949494;
    border-radius: 0.4rem;
    box-shadow: inset 2px 2px 6px #dedede;
    margin: 0.5rem 0rem 0.5rem 0.2rem;
  }
`;
