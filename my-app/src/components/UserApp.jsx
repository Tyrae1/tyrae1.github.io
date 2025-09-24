import React from "react";
import UserForm from "./UserForm.jsx";
import UserList from "./UserList.jsx";

const STORAGE_KEY_TODOS = 'todos';

export default class UserApp extends React.Component{
    constructor(props) {
        super(props);
        let saved = [];
        try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY_TODOS)) || []; }
        catch { saved = []; }
        this.state = {
            todos: saved,
            filter: "all",
            draftTitle: '',
            draftDescription: '',
        };
    }
    addTodo = (title, description) => {
        const newTodo = {
            id: Date.now().toString(),
            title: title.trim(),
            description: description.trim(),
            done: false,
            createdAt: new Date().toISOString(),
        };
        this.setState(
            prev => ({todos: [newTodo, ...prev.todos]}),
        );
    };
    toggleTodo = (id) => {
        this.setState(
            prev => ({
                todos: prev.todos.map(t=>
                    t.id === id? {...t, done: !t.done} :t )
            }));
    };
    editTodo = (updatedTodo) => {
        this.setState(
            prev => ({
                todos: prev.todos.map(t=> t.id === updatedTodo.id ? updatedTodo : t)
            }));
    };
    deleteTodo = (id) => {
        this.setState(
            prev => ({todos: prev.todos.filter(t => t.id !== id)}));
    };
    clearCompleted = () => {
        this.setState(
            prev => ({todos: prev.todos.filter(t => !t.done)})
        );
    };
    componentDidUpdate(prevProps, prevState){
        if (prevState.todos !== this.state.todos) {
            localStorage.setItem(STORAGE_KEY_TODOS, JSON.stringify(this.state.todos));
        }
    }
    clearAll = () => this.setState({todos: []})
    setFilter = (filter) => this.setState({filter})

    render(){
        const {todos, filter, draftTitle, draftDescription} = this.state;
        const btn = (f) => filter === f ? "btn btn-secondary" : "btn btn-outline-secondary";
        const visibleTodos = todos.filter(t=>{
            if (filter === 'active') return !t.done;
            if (filter === 'completed') return t.done;
            return true;
        });
        return (
            <div className="container py-4">
                <h1 className="h3 mb-3">Todo (class)</h1>
                <UserList
                    todos={visibleTodos}
                    onToggle={this.toggleTodo}
                    onDelete={this.deleteTodo}
                />
                <UserForm
                    title={draftTitle}
                    description={draftDescription}
                    onTitleChange={(e)=> this.setState({draftTitle: e.target.value})}
                    onDescriptionChange={(e)=> this.setState({draftDescription: e.target.value})}
                    onSubmit={(e)=> {
                        e.preventDefault();
                        if (!draftTitle.trim()) return;
                        this.addTodo(draftTitle, draftDescription);
                        this.setState({draftTitle: '', draftDescription: ''});
                    }}
                />

                <div className="mt-3 d-flex gap-2">
                    <button className={btn('all')} onClick={() => this.setFilter('all')}>All</button>
                    <button className={btn('active')} onClick={() => this.setFilter('active')}>Active</button>
                    <button className={btn('completed')} onClick={() => this.setFilter('completed')}>Completed</button>

                    <button className="btn btn-outline-warning ms-auto" onClick={this.clearCompleted}>Clear completed</button>
                    <button className="btn btn-outline-danger" onClick={this.clearAll}>Clear all</button>
                </div>
            </div>
        );
    }
}
