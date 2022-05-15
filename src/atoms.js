import { atom, selector } from 'recoil';

export const todoState = atom({
  key: 'todoState',
  default: [],
});

const SHOW_ALL = 'Show All';
const SHOW_COMPLETED = 'Show Completed';
const SHOW_UNCOMPLETED = 'Show Uncompleted';

export const filterState = atom({
  key: 'filterState',
  default: SHOW_ALL,
});

export const filteredTodoState = selector({
  key: 'filteredTodoState',
  get: ({ get }) => {
    const filter = get(filterState);
    const list = get(todoState);

    switch (filter) {
      case SHOW_COMPLETED:
        return list.filter((item) => item.isComplete);
      case SHOW_UNCOMPLETED:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const TodoStatsState = selector({
  key: 'todoStats',
  get: ({ get }) => {
    const list = get(todoState);
    const total = list.length;
    const totalCompleted = list.filter((todo) => todo.isComplete).length;
    const totalUncompleted = list.filter((todo) => !todo.isComplete).length;
    const percentage = total === 0 ? 0 : (totalCompleted / total) * 100;
    return {
      total,
      totalCompleted,
      totalUncompleted,
      percentage,
    };
  },
});
