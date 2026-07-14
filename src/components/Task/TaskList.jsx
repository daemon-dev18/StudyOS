import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  editTask,
}) {
  return (
    <div className="task-list">

      {tasks.length === 0 ? (
        <p
          style={{
            color: "#9ca3af",
            textAlign: "center",
          }}
        >
          No tasks yet 🚀
        </p>
      ) : (

        tasks.map((task) => (

          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />

        ))

      )}

    </div>
  );
}

export default TaskList;