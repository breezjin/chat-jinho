import { fireEvent, render } from './test-utils';

import App from '../app/App';
import React from 'react';

describe("<App /> should have", () => {
  it("renders header", () => {
    const { getByText, getByPlaceholderText, getAllByText, getByRole } = render(<App />);
    const header = getByText("chat - jinho");
    const startChatBtn = getAllByText(/채팅하기/);
    const sendMsgBtn = getByRole('button', { name: '보내기' });
    const inputMsg = getByPlaceholderText(/채팅 메시지를 입력하세요./);
    expect(header).toBeInTheDocument();
    expect(inputMsg).toBeInTheDocument();
    expect(startChatBtn[0]).toBeInTheDocument();
    expect(sendMsgBtn).toBeInTheDocument();
    expect(sendMsgBtn).toBeDisabled();
    fireEvent.click(startChatBtn[0]);
    expect(sendMsgBtn).toBeEnabled();
  });
});

// test("integration test for <App />", async () => {
//   render(<App />);
//   expect(screen.getByText('chat - jinho')).toBeInTheDocument();
//   expect(screen.getByPlaceholderText('채팅 메시지를 입력하세요.')).toBeInTheDocument();
//   expect(screen.getByRole('button', { name: /보내기/i })).toBeInTheDocument();
//   expect(screen.getByRole('button', { name: /보내기/i })).toBeDisabled();
//   expect(screen.findByText('채팅 메시지를 입력하세요.').toBeInTheDocument();
// });

// test("integration test for <Friends />", async () => {
//   render(<Friends />);
//   // fireEvent.click(screen.getByRole('button', { name: /채팅하기/i }));
//   // expect(screen.getByRole('button', { name: '보내기' })).toBeEnabled();
// });
