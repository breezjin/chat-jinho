import { Provider } from 'react-redux';
import React from 'react';
import chatReducer from '../features/chatSlice';
import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { chat: chatReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
