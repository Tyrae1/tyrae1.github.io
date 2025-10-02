import { useState } from 'react';
import {Container, Row, Col, Button, ButtonGroup, Card} from 'react-bootstrap';
import ClassTimer from "./components/timers/ClassTimer";
import FunctionTimer from "./components/timers/FunctionTimer";

export default function App() {
    return (
        <Container className="min-vh-100 py-4">
            <Row className="g-4 justify-content-center">
                <Col xs={12} md={6} lg={5}>
                    <Card className="p-4 shadow-sm rounded-4 text-center card-fixed">
                        <h5 className="mb-3">Class Timer</h5>
                        <ClassTimer
                        storageKey="class-timer-A"
                        startFrom={0}
                        direction="up"
                        step={1}
                        intervalMs={1000}
                        />
                    </Card>
                    </Col>
                <Col xs={12} md={6} lg={5}>
                    <Card className="p-4 shadow-sm rounded-4 text-center card-fixed">
                        <h5 className="mb-3">Function Timer</h5>
                        <FunctionTimer
                        storageKey="function-timer-B"
                        startFrom={30}
                        direction="down"
                        step={1}
                        intervalMs={1000}
                        />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
