import react from "react";
import "./timer.css";

export default class Timer extends React.Component {
    state = {
        seconds: 0,
        running: false,
    };

    _timerId = null;
    componentWillUnmount() {

    }

    componentDidUpdate() {

}
    componentWillMount() {

    }
    tick = () => {

    };
    start = () => {

    };
    stop = () => {

    };
    reset = () => {

    };
    render() {
        const { seconds, running } = this.state;
        return (

        );
    }


}