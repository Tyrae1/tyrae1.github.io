import React from 'react';
import TimerPanel from '../TimerPanel';

const STORAGE_KEY_SECONDS_CLASS = 'seconds_class';

export default class ClassTimer extends React.Component {
    constructor(props) {
        super(props);
        let saved = 0;
        try {
        const raw = localStorage.getItem(STORAGE_KEY_SECONDS_CLASS);
        if (raw != null) {
                const parsed = JSON.parse(raw);
                if (Number.isFinite(parsed)) saved = Number(parsed);
            }
        } catch {}
        this.state = {
            seconds: saved,
            running: false,
        };
        this.intervalId = null;
    }
    componentDidMount() {
        console.log("Component mounted.");
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.seconds !== this.state.seconds) {
            console.log("Component updated:", this.state.seconds);
            localStorage.setItem(STORAGE_KEY_SECONDS_CLASS, JSON.stringify(this.state.seconds));
        }
    }
    componentWillUnmount() {
        console.log("Component unmounted, clearing interval.");
        clearInterval(this.intervalId);
    }
    handleStart = () => {
        if (!this.state.running) {
            this.intervalId = setInterval(() => {
                this.setState(prev => ({seconds: prev.seconds + 1}));
            }, 1000);
            this.setState({ running: true });
        }
    }
    handleStop = () => {
        clearInterval(this.intervalId);
        this.setState({ running: false });
    }
    handleReset = () => {
        this.setState({ seconds: 0, running: false });
        localStorage.setItem(STORAGE_KEY_SECONDS_CLASS, JSON.stringify(0));
    }
    render() {
        const {seconds, running} = this.state;
        const timerClass = `display-3 timer ${running ? "" : "stopped"}`;
        return (
            <div className="timer-area">
                <div className={timerClass}>{seconds}s</div>
                <TimerPanel
                    onStart={this.handleStart}
                    onStop={this.handleStop}
                    onReset={this.handleReset}
                    isRunning={running}
                />
            </div>
        );
    }
}