import react from "react";
import {Button, ButtonGroup} from 'react-bootstrap';

export default function TimerPanel({onStart, onStop, onReset, isRunning}) {
    return (
      <ButtonGroup className="mt-3">
          <Button variant = "primary" onClick={onStart} disabled = {isRunning}>Start</Button>
          <Button variant = "danger" className="ms-2" onClick={onStop} disabled = {!isRunning}>Stop</Button>
          <Button variant = "secondary" className="ms-2" onClick={onReset}>Reset</Button>
      </ButtonGroup>
    );
}