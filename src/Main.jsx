import React from "react";
import TaskItem from "./TaskItem.jsx";
const tasks = [
  { id: 1, text: "complete arfid form" },
  { id: 2, text: "complete paq form" },
  { id: 3, text: "completeMeed form" },
];

export default function Main() {
  const [tasksList, setTaskList] = React.useState(tasks);

  function handleDelete(idToDelete) {
    setTaskList((prevTaskList) => {
      return prevTaskList.filter((item) => {
        return item.id !== idToDelete;
      });
    });
  }

  const tasksListItems = tasksList.map((element, index) => (
    <TaskItem
      key={element.id}
      id={element.id}
      text={element.text}
      onDelete={handleDelete}
    />
  ));

  function getNewTask(FormData) {
    const newTask = FormData.get("task");
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      { id: crypto.randomUUID(), text: newTask },
    ]);
    console.log(tasksListItems);
  }

  return (
    <main>
      <form className="add-task-form" action={getNewTask}>
        <input
          type="text"
          placeholder="e.g. complete assigned task"
          aria-label="Add task"
          name="task"
        />
        <button>Add task</button>
      </form>
      <ul>{tasksListItems}</ul>
    </main>
  );
}
