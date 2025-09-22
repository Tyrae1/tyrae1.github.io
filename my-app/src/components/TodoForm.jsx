import { Component } from "react";

export default class TodoForm extends Component {
    render() {
        const {
            title,
            description,
            onTitleChange,
            onDescriptionChange,
            onSubmit,
        } = this.props;

        return (
            <form onSubmit={onSubmit} className="mb-3">
                <div className="row g-2">
                    <div className="col-md-4">
                        <input
                            className="form-control"
                            placeholder="Title"
                            value={title}
                            onChange={onTitleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            className="form-control"
                            placeholder="Description (optional)"
                            value={description}
                            onChange={onDescriptionChange}
                        />
                    </div>
                    <div className="col-md-2 d-grid">
                        <button className="btn btn-primary" disabled={!title?.trim()}>
                            Add
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
