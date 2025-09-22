// TodoItem.jsx
import { Component } from "react";

export default class TodoItem extends Component {
    render() {
        const { todo, onToggle, onDelete } = this.props;
        return (
            <li className="list-group-item d-flex align-items-center">
                <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={todo.done}
                    onChange={onToggle}
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
                <button className="btn btn-sm btn-outline-danger ms-2" onClick={onDelete}>
                    Delete
                </button>
            </li>
        );
    }
}
