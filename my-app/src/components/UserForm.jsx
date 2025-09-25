import { Component } from "react";
import {Form, Button, Row, Col, FloatingLabel, InputGroup} from "react-bootstrap";
export default class UserForm extends Component {
    render() {
        const {
            firstName,
            lastName,
            age,
            previewUrl,
            photoError = null,
            isValid,
            onFirstNameChange,
            onLastNameChange,
            onAgeChange,
            onPhotoChange,
            onSubmit,
        } = this.props;

        return (
            <Form onSubmit={onSubmit}>
                <Row className="g-3">
                    <Col md={12}>
                    <Form.Group controlId="firstName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={onFirstNameChange}
                        placeholder="Enter your name!"
                        required
                        isInvalid={!firstName?.trim()}
                        />
                        <Form.Control.Feedback type="invalid">
                            Name is required!
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={12}>
                    <Form.Group controlId="lastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={onLastNameChange}
                        placeholder="Enter your Last name!"
                        required
                        isInvalid={!lastName?.trim()}
                        />
                        <Form.Control.Feedback type="invalid">
                            Last name is required!
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                        type="number"
                        name="age"
                        value={age}
                        onChange={onAgeChange}
                        min={0}
                        step={1}
                        placeholder="0"
                        required
                        isInvalid={
                            age === "" || Number(age) < 0 || !Number.isInteger(Number(age))
                        }
                        />
                        <Form.Control.Feedback type="invalid">
                            Enter integer number of your age!
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                    <Col md={12}>
                    <Form.Group controlId="photo">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control
                        type="file"
                        accept="image/*"
                        name="photo"
                        onChange={onPhotoChange}
                        isInvalid={Boolean(photoError)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {photoError || "Take only one image!"}
                        </Form.Control.Feedback>

                        {previewUrl && (
                            <div className="mt-2">
                                <img 
                                src={previewUrl}
                                alt="Preview"
                                className="img-fluid rounded"
                                style={{maxHeight: 180, objectFit: "cover"}}
                                />
                            </div>
                        )}
                    </Form.Group>
                    </Col>
                    
                    <Col md={12} className="pt-2 d-flex">
                    <Button
                    type="submit"
                    variant="primary"
                    disabled={!isValid}
                    className="ms-auto"
                    >Create user</Button>
                    </Col>
                </Row>
                </Form>
        );
    }
}