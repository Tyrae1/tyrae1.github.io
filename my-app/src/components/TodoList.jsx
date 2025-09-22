import { Component} from "react";
import TodoItem from "./TodoItem.jsx";

export default class TodoList extends Component {
    render() {
        const { todos = [], onToggle, onDelete } = this.props;

        return(
            <ul className="list-group">
                {todos.map(t=>(
                    <TodoItem
                    key={t.id}
                    todo={t}
                    onToggle={() => onToggle(t.id)}
                    onDelete={() => onDelete(t.id)} />
                ))}
            </ul>
        );
    }
}