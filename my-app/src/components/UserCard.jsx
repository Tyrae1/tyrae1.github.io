
import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

export default class UserCard extends Component {
    render() {
        const { id, firstName, lastName, age, photoURL, onDelete } = this.props;
        return (
            <Card className="shadow-sm">
                {photoURL && (
                    <Card.Img
                    variant="top"
                    src={photoURL}
                    alt={`${firstName} ${lastName}`}
                    style={{maxHeight: 220, objectFit: "cover"}}
                    />
                )}

                <Card.Body>
                    <Card.Title className="mb-1">
                        {firstName} {lastName}
                    </Card.Title>
                    <Card.Text className="text-mutted mb-3">Age: {age}</Card.Text>
                    {typeof onDelete === "function" && (
                        <div className="d-flex">
                            <Button
                            variant="outline-danger"
                            size="sm"
                            className="ms-auto"
                            onClick={()=>onDelete(id)}
                            >Delete</Button>
                        </div>
                    )}
                </Card.Body>
            </Card>
        );
    }
}
