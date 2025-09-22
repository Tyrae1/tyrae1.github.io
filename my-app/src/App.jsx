import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TodoApp from "./components/TodoApp.jsx";

export default class App extends Component {
    render() {
        return <TodoApp />;
    }
}