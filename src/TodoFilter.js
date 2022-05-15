import React from 'react';
import { useRecoilState } from 'recoil';
import { filterState } from './atoms';

function TodoFilter() {
  const [filter, setFilter] = useRecoilState(filterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value='Show All'>All</option>
        <option value='Show Completed'>Completed</option>
        <option value='Show Uncompleted'>Uncompleted</option>
      </select>
    </div>
  );
}

export default TodoFilter;
