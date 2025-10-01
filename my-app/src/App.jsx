import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function App() {
    return (
        <div className="p-3">
            <Button variant="primary">Start</Button>
            <Button variant="danger" className="ms-2">Stop</Button>
            <Button variant="secondary" className="ms-2">Reset</Button>
        </div>
    );
}
