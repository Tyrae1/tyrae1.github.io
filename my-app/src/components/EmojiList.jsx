import EmojiItem from './EmojiItem.jsx';

export default function EmojiList({emojis, onVote}) {
    return (
        <ul className="list-group">
            {emojis.map((e) => (
                <EmojiItem key={e.id} emoji={e} onVote={onVote}/>
            ))}
        </ul>
    );
}