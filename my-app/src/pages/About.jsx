export default function About() {
    return (
        <div className="container my-4" style={{ maxWidth: 720 }}>
            <h2 className="mb-3">About</h2>
            <p className="text-muted">
                Advanced Todo Manager: Todo List, Details, Edit, Filters. Data storages <code>localStorage</code>.
            </p>
            <ul>
                <li>List of todos on Main Page</li>
                <li>Todo details with back button</li>
                <li>Create and Edit</li>
                <li>Status: <code>active</code> | <code>completed</code></li>
            </ul>
            <small className="text-muted">Version: 1.0.0</small>
        </div>
    );
}