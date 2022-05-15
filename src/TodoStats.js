import React from 'react';
import { useRecoilValue } from 'recoil';
import { TodoStatsState } from './atoms';

function TodoStats() {
  const { total, totalCompleted, totalUncompleted, percentage } = useRecoilValue(TodoStatsState);
  return (
    <div>
      <ul>
        <li>total: {total}</li>
        <li>Completed: {totalCompleted}</li>
        <li>Uncompleted: {totalUncompleted}</li>
        <li>percentage: {percentage}%</li>
      </ul>
    </div>
  );
}

export default TodoStats;
