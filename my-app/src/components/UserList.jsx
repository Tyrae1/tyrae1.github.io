import { Component } from "react";
import Stack from "react-bootstrap/Stack"
import Alert from "react-bootstrap/Alert"
import UserCard from "./UserCard.jsx";

export default class UserList extends Component {
    render() {
        const {users = [], onDelete}= this.props;
        if (!users.length) {
            return (
                <Alert variant="secondary" className="text-center">
                    Users list is empty. Add first user left!
                </Alert>
            );
        }
        
        return(
            <Stack gap={3}>
                {users.map((u)=> (
                    <UserCard
                    key={u.id}
                    id={u.id}
                    firstName={u.firstName}
                    lastName={u.lastName}
                    age={u.age}
                    photoURL={u.photoURL}
                    onDelete={onDelete}
                    />
                ))}
            </Stack>
        );
    }
}