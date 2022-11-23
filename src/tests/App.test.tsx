import React, { PropsWithChildren } from 'react';
import { render, RenderOptions, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../components/App';
import sliceTasks from '../store/sliceTasks';
import sliceDrop from '../store/sliceDrop';
import { addTask } from '../store/sliceTasks';
import { Items } from '../interfaces/interfaces';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { AppStore, RootState } from '../store';
import { Provider } from 'react-redux';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders(
    component: React.ReactElement,
    {
      store = configureStore({
        reducer: {
          sliceTasks,
          sliceDrop
        }
      }),
      ...renderOptions
    }: ExtendedRenderOptions = {}
  ) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(component, { wrapper: Wrapper, ...renderOptions }) }
}

describe('Add todo or not', () => {
  
  test('should added to empty list', () => {
    const previousState: Items = {
      items: []
    }
  
    expect(sliceTasks(previousState, addTask({ text: 'Do it task', done: false, id: '0' }))).toEqual({
      items: [
      { text: 'Do it task', done: false, id: '0' }
    ]})
  })
  
  test('should added to existing list', () => {
    const previousState: Items = {
      items: [
        { text: 'Do it task', done: false, id: '0' }
      ]
    }
  
    expect(sliceTasks(previousState, addTask({ text: 'Task is Done!', done: true, id: '1' }))).toEqual({
      items: [
      { text: 'Do it task', done: false, id: '0' },
      { text: 'Task is Done!', done: true, id: '1' }
    ]})
  })


  test('list todo should 0', () => {
    renderWithProviders(<App/>);
    
    expect(screen.getByText(/items left/i)).toHaveTextContent('0 items left');
  });

  test('list todo should 1', () => {
    renderWithProviders(<App/>);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {target: {value: 'new task'}});
    fireEvent.keyUp(input, {key: 'Enter', code: 'Enter', charCode: 13});

    
    expect(screen.getByText(/items left/i)).toHaveTextContent('1 items left');
  });
})
