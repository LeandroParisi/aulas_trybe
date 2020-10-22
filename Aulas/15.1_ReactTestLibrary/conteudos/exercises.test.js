import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../exercícios/exercise-todo-list/src/App';

describe('Exercise 1: Check add Task Button entire workFlow', () => {
  it('Button to add task should exist', () => {
    const { getByTestId } = render(<App />);

    const addTaskButton = getByTestId('btnAdd');
    
    expect(addTaskButton).toBeInTheDocument();
  })

  it('Button to add task should have text -> "Adicionar"', () => {
    const { getByTestId } = render(<App />);

    const addTaskButton = getByTestId('btnAdd');

    expect(addTaskButton.value).toBe('Adicionar');
  })

  it('Add Task Button click should save typed task', () => {
    const { getByTestId, getByText, getByLabelText } = render(<App />);

    const inputedText = 'Meu mock de tarefa'
  
    const taskInput = getByLabelText('Tarefa:')
    const addTaskButton = getByTestId('btnAdd');

    fireEvent.change(taskInput, { target: { value: inputedText } } )
    fireEvent.click(addTaskButton);

    const savedTask = getByText('Meu mock de tarefa');

    expect(savedTask).toBeInTheDocument();
  })
})

// 1) Acessar os elementos da sua tela

// 2) Interagir com eles (se houver necessidade)

// 3) Fazer seu teste

describe('Exercise 2: Check adding tasking recursivelly', () => {
 
})