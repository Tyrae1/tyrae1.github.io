import {ListGroup, Button, Badge} from 'react-bootstrap';

function FavoriteList({items=[], onSelect, onRemove}) {
    if (!items.length) {
        return <p className="text-muted">There is no favorite places, yet!</p>
    }
    return (
        <div className="mx-auto" style={{maxWidth: 520}}>
            <h5 className="mb-3">
                Favorite <Badge bg="secondary">{items.length}</Badge>
            </h5>
            <ListGroup>
                {items.map((fav) => (
                    <ListGroup.Item
                        key={fav.id}
                        className="d-flex justify-content-between align-items-center"
                        >
                        <div>
                            <strong>{fav.name}</strong>
                            {fav.country ? <span className="text-muted">, {fav.country}</span> : null}
                        </div>
                        <div className="d-flex gap-2">
                            <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={() => onRemove?.(fav.id)}
                                aria-label={`Delete ${fav.name} from Favorites`}
                                >x</Button>
                        </div>
                        </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default FavoriteList;