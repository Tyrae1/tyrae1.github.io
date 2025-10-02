import { useState } from 'react';
import {Container, Row, Col, Button, ButtonGroup, Card} from 'react-bootstrap';
import ClassTimer from "./components/ClassTimer";
import FunctionTimer from "./components/FunctionTimer";

export default function App() {
    const [variant, setVariant] = useState("class");
    const [mounted, setMounted] = useState(true);
    return (
        <Container className="py-4">
            <Row className="mb-3">
                <Col md="auto">
                    <ButtonGroup>
                        <Button
                            variant = {variant === "class" ? "primary" : "outline-primary"}
                            onClick = {() => setVariant("class")}>
                            Class
                        </Button>
                        <Button
                            variant = {variant === "func" ? "primary" : "outline-primary"}
                            onClick = {() => setVariant("func")}>
                            Function
                            </Button>
                    </ButtonGroup>
                </Col>
                <Col md="auto">
                    <Button
                        variant = {mounted ? "warning" : "success"}
                        onClick = {() => setMounted(m => !m)}>
                        {mounted ? "Unmounted Timer" : "Mount Timer"}
                        </Button>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Card className="p-3">
                        {mounted && (
                            variant === "class" ? <ClassTimer storageKey="class-timer-seconds" />
                                : <FunctionTimer storageKey="function-timer-seconds" />
                        )}
                        {mounted && <div className="text-muted">Timer unmounted</div>}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
