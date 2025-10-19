import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import MainLayout from '../templates/MainLayout.jsx';
import TodosList from '../pages/TodosList.jsx';
import EditTodo from "../pages/EditTodo.jsx";
import CreateTodo from "../pages/CreateTodo.jsx";
import About from "../pages/About.jsx";
import TodoDetails from "../pages/TodoDetails.jsx";

const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<TodosList />} />
                    <Route path="/create" element={<CreateTodo />} />
                    <Route path="/task/:id" element={<TodoDetails />} />
                    <Route path="/task/:id/edit" element={<EditTodo />} />
                    <Route path="/about" element={<About />} />

                    <Route path="*" element={<Navigate to="/" replace/>} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
