import { Component} from "react";
import UserItem from "./UserItem.jsx";

export default class UserList extends Component {
    render() {
        const { todos = [], onToggle, onDelete } = this.props;

        return(
            <ul className="list-group">
                {todos.map(t=>(
                    <UserItem
                        key={t.id}
                        todo={t}
                        onToggle={() => onToggle(t.id)}
                        onDelete={() => onDelete(t.id)} />
                ))}
            </ul>
        );
    }
}