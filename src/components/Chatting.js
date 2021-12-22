import React, { useEffect, useState } from 'react';

import ChatBubbleReceive from '../components/atoms/ChatBubbleReceive';
import ChatBubbleSend from '../components/atoms/ChatBubbleSend';
import MsgBar from './atoms/MsgBar';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function Chatting() {
  const [isUerSelected, setIsUerSelected] = useState(false);

  const allChats = useSelector(state => state.chat.allChats);
  const currentUser = useSelector(state => state.chat.currentUser);
  const roomChats = [];

  useEffect(() => {
    if (currentUser) {
      setIsUerSelected(true);
    }
  }, [currentUser, isUerSelected])

  if (isUerSelected) {
    for (let i = 0; i < allChats.length; i++) {
      if (allChats[i].name === currentUser.name) {
        [...allChats[i].msgs].forEach(msg => roomChats.push(msg));
      }
    }
  }

  return (
    <StyledChatting>
      <div className='chat-msgs'>
        {currentUser.name && roomChats.length === 0 &&
          <span className='info'>
            아직 {currentUser.name}님과 대화가 없습니다. 대화를 시작해 보세요!
          </span>
        }
        {!currentUser.name &&
          <div className='welcome'>
            <img className='welcome-img' src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcuIqix%2FbtrozwHK0Ib%2FjXxm74TqQKKalK0ZEQiEU0%2Fimg.png' alt='welcome' />
            <span>chat-jinho에 오신 것을 환영합니다. 어서 오세요 🤗</span>
            <span>바닐라코딩 부트캠프11기 동기들 이름 20개가 랜덤으로 세팅되어 있습니다.</span>
          </div>
        }
        {isUerSelected && currentUser.name &&
          Array.from(roomChats).map(item => {
            if (item.name === currentUser.name) {
              return <ChatBubbleReceive chat={item} />
            }
            return <ChatBubbleSend chat={item} />
          })
        }
      </div>
      <div className='chat-msg-bar'>
        <MsgBar />
      </div>
    </StyledChatting>
  );
}

const StyledChatting = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  .chat-msgs {
    flex-grow: 1;
    min-height: 20rem;
    background-color: white;
    padding: 1rem;
    border-radius: 0.6rem 0.6rem 0rem 0rem;
    box-shadow: inset 0 0 12px #8f8f8f;
  }

  .info {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    font-size: smaller;
  }

  .welcome {
    width: 100%;
    height: 100%;
    font-size: small;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .welcome-img {
    width: 20rem;
    margin-bottom: 1rem;
  }

  .chat-msg-bar {
    height: 3rem;
  }
`;
