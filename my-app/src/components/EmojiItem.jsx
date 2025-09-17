export default function EmojiItem({ emoji, onVote }) {
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3 flex-grow-1">
                            <span style={{fontSize: "1.75rem"}} aria-hidden>
                                {emoji.char}
                            </span>
                <span className="fw-medium">{emoji.label}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
                <span className="badge text-bg-secondary">{emoji.votes}</span>
                <button onClick={()=>onVote(emoji.id)} type="button" className="btn btn-sm btn-outline-primary">
                    Vote
                </button>
            </div>
        </li>
    );
}