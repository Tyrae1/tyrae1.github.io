import React, {useEffect, useRef, useState} from 'react';
import TimerPanel from '../TimerPanel';

const STORAGE_KEY_SECONDS_FUNCTION = 'seconds_function';

export default function FunctionTimer({storageKey}) {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);
    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY_SECONDS_FUNCTION);
        if (raw !== null) {
            try {
                const parsed = JSON.parse(raw);
                if (Number.isFinite(parsed)) setSeconds(parsed);
            } catch {}
        }
        console.log("component mounted");
    }, []);

    useEffect(() => {
        console.log("Component updated:", seconds);
        localStorage.setItem(STORAGE_KEY_SECONDS_FUNCTION, JSON.stringify(seconds));
    }, [seconds]);

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }
        return () =>
            clearInterval(intervalRef.current);
    }, [running]);

    const handleStart = () => setRunning(true);
    const handleStop = () => setRunning(false);
    const handleReset = () => {setSeconds(0); localStorage.setItem(STORAGE_KEY_SECONDS_FUNCTION, JSON.stringify(0)); };

    const timerClass = `display-3 timer ${running ? "" : "stopped"}`;
    return (
        <div className="timer-area">
            <div className={timerClass}>{seconds}s</div>
            <TimerPanel
            onStart={handleStart}
            onStop={handleStop}
            onReset={handleReset}
            isRunning={running}
            />
        </div>
    );
}