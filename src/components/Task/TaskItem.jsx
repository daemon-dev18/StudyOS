import { useState } from "react";

function TaskItem({
  task,
  toggleTask,
  deleteTask,
  editTask,
}) {

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);


  function saveEdit() {

    if (text.trim() === "") return;

    editTask(task.id, text);
    setEditing(false);

  }


  return (

    <div className="task-item">


      <div className="task-left">


        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />



        {editing ? (

          <input
            className="edit-input"
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
          />

        ) : (

          <span
            className={
              task.completed
                ? "completed"
                : ""
            }
          >
            {task.text}
          </span>

        )}



        <span className="subject">
          {task.subject}
        </span>



        <span
          className={`priority ${task.priority?.toLowerCase()}`}
        >
          {task.priority}
        </span>



        {task.dueDate && (

          <span className="date">
            📅 {task.dueDate}
          </span>

        )}



      </div>




      <div className="task-actions">


        {editing ? (

          <button onClick={saveEdit}>
            💾
          </button>

        ) : (

          <button
            onClick={() =>
              setEditing(true)
            }
          >
            ✏️
          </button>

        )}



        <button
          className="delete-btn"
          onClick={() =>
            deleteTask(task.id)
          }
        >
          ❌
        </button>


      </div>


    </div>

  );

}

export default TaskItem;