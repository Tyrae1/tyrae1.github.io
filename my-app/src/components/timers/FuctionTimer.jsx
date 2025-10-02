import React, {useEffect, useRef, useState} from 'react';
import TimerPanel from '../TimerPanel';


export default function FunctionTimer({storageKey}) {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);
    useEffect(() => {
        TODO: setSeconds(...)
    }, [storageKey]);
}