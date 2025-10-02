import { useState } from 'react';
import {Container, Row, Col, Button, ButtonGroup, Card} from 'react-bootstrap';
import ClassTimer from "./components/timers/ClassTimer";
import FunctionTimer from "./components/timers/FunctionTimer";

export default function App() {
    const [variant, setVariant] = useState("class");
    const [mounted, setMounted] = useState(true);
    return (
        <Container className="min-vh-100 d-flex flex-column py-4">
            <Row className="mb-3 justify-content-center">
                <Col xs="auto" className="d-flex align-items-center gap-3 flex-wrap">
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
            <Row className="justify-content-center mt-3">
                <Col xs={12} sm={10} md={6} lg={4}>
                    <Card className="p-4 shadow-sm rounded-4 card-fixed text-center">
                        {mounted ? (
                            variant === "class"
                                ? <ClassTimer storageKey="class-timer-seconds" />
                                : <FunctionTimer storageKey="function-timer-seconds" />
                        ): (<div className="text-muted text-nowrap">Timer unmounted</div>)}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
