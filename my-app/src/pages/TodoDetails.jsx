import {useMemo} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import {Alert, Button, Card} from 'react-bootstrap';
import {getAll} from '../utils/todos';

const TodoDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const todo = useMemo(()=> {
        const items = getAll();
        return items.find(t=>String(t.id) === String(id));
    },[id]);

    if (!todo) {
        return (
            <div className="container my-4" style={{maxWidth: 720}}>
                <Alert variant="warning" className="d-flex justify-content-between align-items-center">
                    <span>Task not found.</span>
                    <Button variant="secondary" onClick={() => navigate(`/`)}>
                        Back to List
                    </Button>
                </Alert>
            </div>
        );
    }
    return (
        <div className="container my-4" style={{ maxWidth: 720 }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="m-0">Task details</h2>
                <div className="d-flex gap-2">
                    <Button variant="secondary" onClick={() => navigate("/")}>Back to list</Button>
                    <Button as={Link} to={`/task/${todo.id}/edit`} variant="primary">Edit</Button>
                </div>
            </div>

            <Card>
                <Card.Body>
                    <div className="mb-3">
                        <strong>Title:</strong><br />{todo.title}
                    </div>
                    <div className="mb-3">
                        <strong>Description:</strong><br />{todo.description || <em className="text-muted">No description</em>}
                    </div>
                    <div className="mb-3">
                        <strong>Status:</strong> {todo.status === "completed" ? "✅ completed" : "🕓 active"}
                    </div>
                    <div className="mb-0">
                        <strong>Created At:</strong> {new Date(todo.createdAt).toLocaleString()}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TodoDetails;