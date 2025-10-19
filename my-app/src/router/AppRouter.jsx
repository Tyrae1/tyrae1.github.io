import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../templates/MainLayout.jsx';
import TodosList from '../pages/TodosList.jsx';
import EditTodo from "../pages/EditTodo.jsx";
import CreateTodo from "../pages/CreateTodo.jsx";

const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<h1>Main Page</h1>} />
                    <Route path="/todos" element={<TodosList />} />
                    <Route path="/todos/create" element={<CreateTodo />} />
                    <Route path="/todos/:id" element={<EditTodo />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
