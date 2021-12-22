import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default function ChatBubbleReceive({ chat }) {
  return (
    <StyledChatBubbleReceive>
      <div className='msg'>
        <div className='bubble'>
          {chat.msg}
        </div>
        <div className='chat-time'>
          {chat.time}
        </div>
      </div>
    </StyledChatBubbleReceive>
  );
}

ChatBubbleReceive.propTypes = {
  chat: PropTypes.object,
};

const StyledChatBubbleReceive = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  .msg {
    max-width: 45%;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .bubble {
    font-size: small;
    color: black;
    background-color: white;
    box-shadow: inset 0px 0px 0px 3px #ff515f;
    padding: 0.8rem;
    border-radius: 0.4rem;
  }

  .chat-time {
    font-size: x-small;
    margin-left: 0.5rem;
  }
`;
