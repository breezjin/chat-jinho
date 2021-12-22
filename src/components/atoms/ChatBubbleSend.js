import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default function ChatBubbleSend({ chat }) {
  return (
    <StyledChatBubbleSend>
      <div className='msg'>
        <div className='bubble'>
          {chat.msg}
        </div>
        <div className='chat-time'>
        {chat.time}
        </div>
      </div>
    </StyledChatBubbleSend>
  );
}

ChatBubbleSend.propTypes = {
  chat: PropTypes.object,
};

const StyledChatBubbleSend = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .msg {
    max-width: 45%;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .bubble {
    font-size: small;
    font-weight: bold;
    color: white;
    background-color: #ff515f;
    padding: 0.8rem;
    border-style: solid;
    border-radius: 0.6rem;
  }

  .chat-time {
    font-size: x-small;
    margin-right: 1rem;
  }
`;
