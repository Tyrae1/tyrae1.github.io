import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Form, Alert} from "react-bootstrap";
import {create} from "../utils/todos.js"

const CreateTodo = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            setError("Title is required!");
            return;
        }
        create(title, description);
        navigate("/");
    };

    return (
        <div className="container my-4" style={{maxWidth: 680}}>
            <h2 className="mb-3">Create Todo</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="todoTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter todo title!"
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
                        type="textarea"
                        rows={3}
                        placeholder="Optional description"
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                    />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                    Add todo
                </Button>
            </Form>
        </div>
    );
};

export default CreateTodo;
