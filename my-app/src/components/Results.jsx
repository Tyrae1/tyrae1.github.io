export default function Results({winners, onClose}) {

      if (winners === null) return null;
      const isEmpty = winners.length === 0;
      return (
          <div className="mt-3">
              <div className={`alert ${isEmpty ? "alert-secondary" : "alert-success"} d-flex justify-content-between align-items-start`} role="alert">
                  <div>
                      {isEmpty ? (
                          <span>No votes yet. Please vote first.</span>
                      ) : winners.length === 1 ? (
                          <span>
                              Winner: <span style={{fontSize: "1.5rem"}} aria-hidden>{winners[0].char}</span>{" "}
                              <strong className="ms-1">{winners[0].label}</strong> ({winners[0].votes}
                          </span>
                      ) : (
                          <>
                              <div className="mb-2 fw-medium">It's a tie:</div>
                              <ul className="mb-0 ps-3">
                                  {winners.map(w=> (
                                      <li key={w.id}>
                                          <span style={{fontSize: "1.25rem"}} aria-hidden>{w.char}</span>{" "}
                                          <strong className="ms-1">{w.label}</strong> ({w.votes})
                                      </li>
                                  ))}
                              </ul>
                          </>
                      )}
                  </div>
                  <button type="button" className="btn btn-sm btn-outline-dark ms-3" onClick={onClose}>
                      Close
                  </button>
              </div>
          </div>
      );
}