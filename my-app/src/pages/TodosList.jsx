import {Alert, Button} from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import {useState, useEffect} from "react";
import CustomTable from "../components/CustomTable/CustomTable";
import {useNavigate} from "react-router-dom";
import {getAll, create, toggle, removeByID} from "../utils/todos.js";


const TodosList = () => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setTodos(getAll());
    }, []);

    const loadTodos = () => {
        const data = getAll();
        setTodos(Array.isArray(data) ? data : []);
    };

    const handleAdd = () => {
        if (!title.trim()) return;
        create(title, description);
        setTodos(getAll());
        setTitle("");
        setDescription("");
    };

    const handleToggle = (id) => {
        toggle(id);
        setTodos(getAll());
    };

    const handleDelete = (id) => {
        removeByID(id);
        setTodos(getAll());
    };

    const getHeaders = () => ([
        'ID', 'Title', 'Description', 'Status', 'Created At', 'Controls'
    ]);

    const getContents = (items) => {
        return items.map(t => ([
            t.id,
            t.title,
            t.description || '',
            <span
                role="button"
                title="Toggle status"
                onClick={() => handleToggle(t.id)}
                style={{ userSelect: "none", cursor: "pointer" }}
            >
                {t.status === "completed" ? "✅ completed" : "🕓 active"}
            </span>,
            new Date(t.createdAt).toLocaleString(),
            <div className="d-flex gap-2" key={`ctrl-${t.id}`}>
                <Button onClick={() => navigate(`/task/${t.id}`)} variant="primary" size="sm">
                    🔍 Details
                </Button>
                <Button
                    onClick={() => handleToggle(t.id)}
                    variant="success"
                    size="sm"
                    title={t.status === "completed" ? "Mark active" : "Mark completed"}
                >
                    {t.status === "completed" ? "↩️ Mark active" : "✅ Mark completed"}
                </Button>
                <Button
                    onClick={() => handleDelete(t.id)}
                    variant="danger"
                    size="sm"
                    title="Delete"
                >
                    🗑️ Delete
                </Button>
            </div>
        ]));
    };
    return (
        <div>
            <PageHeader
                title={'Todos List'}
                LeftControl={() => <Button variant={'success'} onClick={loadTodos}>
                    Load todos from storage
                </Button>}
            />
            <div className="container mb-3" style={{maxWidth: 600}}>
                <input
                    className="form-control  mb-2"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                <textarea
                    className="form-control  mb-2"
                    placeholder="Description (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                <Button className="w-100" variant="primary" onClick={handleAdd}>
                    Add
                </Button>
            </div>

            {todos.length === 0 && (
                <Alert variant={'secondary'} className="text-center">
                    No todos yet. Add your first.
                </Alert>
                )}
            {todos.length > 0 && (
                <div className="content">
                    <CustomTable
                        responsive="lg"
                        variant="secondary"
                        headers={getHeaders()}
                        content={getContents(todos)}
                    />
                </div>
            ) }

        </div>
    );
};

export default TodosList;
