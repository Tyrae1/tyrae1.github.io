
// TodoItem.jsx
import { Component } from "react";

export default class UserItem extends Component {
    render() {
        const { todo, onToggle, onDelete } = this.props;
        return (
            <li className="list-group-item d-flex align-items-center" style={{ cursor: "pointer" }} onClick={onToggle} role="button" tabIndex={0} onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onToggle();
                }
            }}>
                <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={todo.done}
                    onChange={(e) => {e.stopPropagation(); onToggle();}}
                />
                <div className="flex-grow-1">
                    <div className={todo.done ? "text-decoration-line-through" : ""}>
                        <strong>{todo.title}</strong>
                        {todo.description ? ` - ${todo.description}` : ""}
                    </div>
                    <small className="text-muted">
                        {new Date(todo.createdAt).toLocaleString()}
                    </small>
                </div>
                <button className="btn btn-sm btn-outline-danger ms-2" onClick={(e) => {e.stopPropagation(); onDelete();}}>
                    Delete
                </button>
            </li>
        );
    }
}
