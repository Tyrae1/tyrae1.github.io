export default function ActionBar({onReset, onShowResults, canReset, canShow}) {
    return (
        <div className="d-flex gap-2 justify-content-end mt-3">
            <button type="button" className="btn btn-outline-secondary" onClick={onReset} disabled={!canReset}>
                Reset
            </button>
            <button type="button" className="btn btn-primary" onClick={onShowResults} disabled={!canShow}>
                Show Results
            </button>
        </div>
    );
}