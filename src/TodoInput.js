import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoState } from './atoms';

let id = 0;
function getId() {
  return id++;
}

function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoState);

  const addTodo = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id: getId(),
        todo: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
