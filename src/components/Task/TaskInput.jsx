function TaskInput({
  task,
  setTask,
  priority,
  setPriority,
  subject,
  setSubject,
  dueDate,
  setDueDate,
  addTask,
}) {
  return (
    <div className="task-input">

      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
      />


      <select
        value={subject}
        onChange={(e) =>
          setSubject(e.target.value)
        }
      >
        <option value="General">
          📌 General
        </option>

        <option value="HTML">
          🌐 HTML
        </option>

        <option value="CSS">
          🎨 CSS
        </option>

        <option value="JavaScript">
          ⚡ JavaScript
        </option>

        <option value="React">
          ⚛️ React
        </option>

        <option value="DSA">
          🧠 DSA
        </option>
      </select>


      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >
        <option value="High">
          🔴 High
        </option>

        <option value="Medium">
          🟡 Medium
        </option>

        <option value="Low">
          🟢 Low
        </option>
      </select>


      <input
        type="date"
        value={dueDate}
        onChange={(e) =>
          setDueDate(e.target.value)
        }
      />


      <button onClick={addTask}>
        Add
      </button>

    </div>
  );
}

export default TaskInput;