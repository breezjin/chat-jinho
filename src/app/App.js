import Chatting from '../components/Chatting';
import React from 'react';
import SideBar from '../components/SideBar';
import logo from './logo.png';
import styled from 'styled-components';

export default function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>chat - jinho</h2>
        <span className='description'>
          Vanilla Coding Bootcamp 11th - Mid Term Exam - yoonjinho
        </span>
      </header>
      <div className='body'>
        <div className='side-bar'>
          <SideBar />
        </div>
        <div className='chatting'>
          <Chatting />
        </div>
      </div>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100%;

  .App-header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    margin-bottom: 1rem;
  }

  .App-logo {
    width: 3rem;
    height: fit-content;
    margin-right: 0.4rem;
  }

  .description {
    margin: 0.2rem 0rem 0rem 1rem;
  }

  .body {
    width: 90vw;
    height: 88vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .side-bar {
    width: 20rem;
    align-self: stretch;
    min-width: 20rem;
    min-height: 30rem;
    max-height: 80vh;
    margin-right: 1rem;
  }

  .chatting {
    flex-grow: 1;
    align-self: stretch;
    max-width: 40rem;
    min-height: 30rem;
    max-height: 80vh;
    display: flex;
  }
`;
