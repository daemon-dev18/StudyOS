import useLocalStorage from "./useLocalStorage";

function useTasks() {

  const [tasks, setTasks] = useLocalStorage(
    "tasks",
    []
  );


  const completedTasks = tasks.filter(
    (task) => task.completed
  );


  const pendingTasks = tasks.filter(
    (task) => !task.completed
  );


  const progress =
    tasks.length === 0
      ? 0
      : Math.round(
          (completedTasks.length / tasks.length) * 100
        );


  return {
    tasks,
    setTasks,
    total: tasks.length,
    completed: completedTasks.length,
    pending: pendingTasks.length,
    progress,
  };

}

export default useTasks;