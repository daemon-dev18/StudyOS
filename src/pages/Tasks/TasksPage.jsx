import { useState } from "react";
import "./TasksPage.css";
import useLocalStorage from "../../hooks/useLocalStorage";

import TaskInput from "../../components/Task/TaskInput";
import TaskList from "../../components/Task/TaskList";
import "../../components/Task/Task.css";

function TasksPage() {

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [subject, setSubject] = useState("General");
  const [dueDate, setDueDate] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");


  const [tasks, setTasks] = useLocalStorage("tasks", []);



  function addTask() {

    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
      priority,
      subject,
      dueDate,
    };

    setTasks([
      ...tasks,
      newTask
    ]);

    setTask("");
    setPriority("Medium");
    setSubject("General");
    setDueDate("");

  }



  function deleteTask(id) {

    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );

  }



  function toggleTask(id) {

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );

  }



  function editTask(id, newText) {

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              text: newText,
            }
          : task
      )
    );

  }



  const filteredTasks = tasks
    .filter((task) =>
      task.text
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((task) => {

      if (filter === "Completed") {
        return task.completed;
      }

      if (filter === "Pending") {
        return !task.completed;
      }

      return true;

    });



  return (

    <div className="dashboard">

      <div className="welcome">

        <h1>
          ✅ Tasks
        </h1>

        <p>
          Stay organized and finish your work.
        </p>

      </div>


      <div className="focus-card">


        <TaskInput

          task={task}
          setTask={setTask}

          priority={priority}
          setPriority={setPriority}

          subject={subject}
          setSubject={setSubject}

          dueDate={dueDate}
          setDueDate={setDueDate}

          addTask={addTask}

        />


        <div className="task-controls">

          <input

            placeholder="Search tasks..."

            value={search}

            onChange={(e) =>
              setSearch(e.target.value)
            }

          />


          <select

            value={filter}

            onChange={(e) =>
              setFilter(e.target.value)
            }

          >

            <option>
              All
            </option>

            <option>
              Pending
            </option>

            <option>
              Completed
            </option>


          </select>

        </div>



        <TaskList

          tasks={filteredTasks}

          toggleTask={toggleTask}

          deleteTask={deleteTask}

          editTask={editTask}

        />


      </div>

    </div>

  );

}

export default TasksPage;