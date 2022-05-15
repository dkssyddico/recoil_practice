import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filteredTodoState, filterState } from './atoms';
import TodoFilter from './TodoFilter';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoStats from './TodoStats';

function Main() {
  const todoList = useRecoilValue(filteredTodoState);

  return (
    <div>
      <h1>To do List</h1>
      <TodoInput />
      <TodoFilter />
      <TodoStats />
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}

export default Main;
