import { useEffect, useState } from 'react';
import ProfileSection from './components/ProfileSection.jsx';
import TaskFilterButtons from './components/TaskFilterButtons.jsx';
import TaskItem from './components/TaskItem.jsx';
import filterTasks from './utils/filterTasks.js';
import useTasks from './hooks/useTasks.js';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');
  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <ProfileSection name="Student" />
      <TaskFilterButtons filter={filter} onFilterChange={setFilter} />
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
