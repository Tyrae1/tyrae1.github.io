import {useState} from "react";
import Header from './components/Header';
import EmojiList from './components/EmojiList';
import ActionBar from './components/ActionBar';
import Results from './components/Results';

export default function App(){
    const [emojis, setEmojis] = useState([
        {id:1, char: "😄", label: "Happy", votes: 0},
        {id:2, char: "🥰", label: "Loved", votes: 0},
        {id:3, char: "😐", label: "Pokerface", votes: 0},
        {id:4, char: "😔", label: "Sad", votes: 0},
        {id:5, char: "😡", label: "Angry", votes: 0},
    ]);

    const [winners, setWinners] = useState(null);

    function handleVote(id){
        setWinners(null);
        setEmojis(prev=>
        prev.map(e=>
            (e.id === id ? {...e, votes: (e.votes ?? 0) + 1} : e))
        );
    }

    function handleReset(){
        setEmojis(prev=> prev.map(e => ({...e, votes: 0})));
        setWinners(null);
    }

    function handleShowResults(){
        const max = Math.max(...emojis.map(e=>e.votes ?? 0));
        if (!isFinite(max) || max <=0) {
            setWinners([]);
            return;
        }
        setWinners(emojis.filter(e=>(e.votes ?? 0) === max));
    }

    const hasVotes = emojis.some(e=>(e.votes ?? 0) > 0);

    return (
        <div className="container py-4">
        <Header />
    <section className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
            <EmojiList emojis={emojis} onVote={handleVote}/>
        <ActionBar
            onReset={handleReset}
            onShowResults={handleShowResults}
            canReset={hasVotes}
            canShow={hasVotes}
        />
            <Results winners={winners} onClose={() => setWinners(null)} />
        </div>
        </section>
        </div>
    );
}
