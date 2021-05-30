import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="taskList__item">
        {tasks.map(task => (
            <li
                className={`taskList__content${task.done && hideDoneTasks ? "taskList__item--hidden" : ""}`}>
                <button className="taskList__button">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`task ${task.done ? "taskList__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className="taskList__button taskList__button--remove">&#128465;</button>
            </li>
        ))}
    </ul>

);
export default Tasks;