import React from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from './atoms';

function TodoItem({ id, todo, isComplete }) {
  const [todoList, setTodoList] = useRecoilState(todoState);

  const editTodo = ({ target: { value } }) => {
    const newTodoList = todoList.map((todo) => (todo.id === id ? { ...todo, todo: value } : todo));
    setTodoList(newTodoList);
  };

  const changeComplete = () => {
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodoList(newTodoList);
  };

  const deleteTodo = () => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <input type='text' value={todo} onChange={editTodo} />
      <input type='checkbox' checked={isComplete} onChange={changeComplete} />
      <button onClick={deleteTodo}>X</button>
    </div>
  );
}

export default TodoItem;
