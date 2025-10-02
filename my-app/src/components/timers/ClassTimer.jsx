import React from 'react';
import TimerPanel from '../TimerPanel';

const STORAGE_KEY_SECONDS = 'seconds';

export default class ClassTimer extends React.Component {
    constructor(props) {
        super(props);
        const raw = localStorage.getItem(STORAGE_KEY_SECONDS);
        let saved = 0;
        if (raw !== null) {
            try {
                const parsed = JSON.parse(raw);
                saved = Number.isFinite(parsed) ? parsed: 0;
            } catch {
                const n = Number(raw);
                saved = Number.isFinite(n) ? n: 0;
            }
        }
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
            localStorage.setItem(STORAGE_KEY_SECONDS, JSON.stringify(this.state.seconds));
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
        this.setState({ seconds: 0 });
        localStorage.setItem(STORAGE_KEY_SECONDS, JSON.stringify(0));
    }
    render() {
        const {seconds, running} = this.state;
        const timerClass = `display-3 timer ${running ? "" : "stopped"}`;
        return (
            <div>
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