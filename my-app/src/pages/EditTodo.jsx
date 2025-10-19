import {useState, useEffect} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import {Button, Form, Alert, Card} from "react-bootstrap";
import {getById, update} from "../utils/todos.js"


const EditTodo = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('active');
    const [error, setError] = useState('');
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const todo = getById(id);
        if (!todo) {
            setNotFound(true);
            return;
        }
        setTitle(todo.title || "");
        setDescription(todo.description || "");
        setStatus(todo.status || "active");
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            setError('Title is required!');
            return;
        }
        const ok = update(id, {
            title: title.trim(),
            description: description.trim(),
            status,
        });
        if (!ok) {
            setError('Update failed: task not found.');
            return;
        }
        navigate(`/task/${id}`);
    };

    if (notFound) {
        return (
            <div className="container my-4" style={{ maxWidth: 720 }}>
                <Alert variant="warning" className="d-flex justify-content-between align-items-center">
                    <span>Task not found.</span>
                    <Button as={Link} to="/" variant="secondary">
                        Back to list
                    </Button>
                </Alert>
            </div>
        );
    }

    return (
        <div className="container my-4" style={{ maxWidth: 720 }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="m-0">Edit Todo</h2>
                <div className="d-flex gap-2">
                    <Button as={Link} to={`/task/${id}`} variant="secondary">
                        Back to details
                    </Button>
                </div>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="todoTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter todo title"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    setError("");
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="todoDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Optional description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="todoStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="active">active</option>
                                <option value="completed">completed</option>
                            </Form.Select>
                        </Form.Group>

                        <Button type="submit" variant="primary" className="w-100">Save changes</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default EditTodo;
