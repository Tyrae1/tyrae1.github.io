import {Button, Card, ListGroup} from 'react-bootstrap';

function WeatherCard({data, isFavorite=false, onAddFavorite, onRemoveFavorite}) {
    const {city, country, current, days} = data;

    return (
        <Card className="mx-auto text-start" style={{maxWidth: 520}}>
            <Card.Body>
                <Card.Title className="mb-2 d-flex justify-content-between align-items-center">
                    <span>{city}, {country}</span>
                    {isFavorite ? (
                        <Button size="sm" variant="outline-danger" onClick={onRemoveFavorite}>
                            Delete from Favorites
                        </Button>
                    ) : (
                        <Button size="sm" variant="outline-warning" onClick={onAddFavorite} aria-label="Add to Favorites">
                            ⭐ Add to Favorites
                        </Button>
                    )}
                </Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                    Current Weather
                </Card.Subtitle>
                <div className="fs-4 mb-1">
                    🌡 {current.temperature != null ? `${current.temperature} °C` : '—'}
                </div>
                <div className="mb-3">
                    💨 Wind: {current.windspeed != null ? `${current.windspeed} km/h` : '—'}
                </div>
                <Card.Subtitle className="mt-4 mb-2 text-muted">
                    Forecast for few days:
                </Card.Subtitle>
                <ListGroup variant="flush">
                    {days.map((d)=>(
                        <ListGroup.Item
                        key={d.date}
                        className="d-flex justify-content-between"
                        >
                            <span>{d.date}</span>
                            <span>
                                min: {d.tmin != null ? `${d.tmin}°` : '—'} / max:{' '}
                                {d.tmax != null ? `${d.tmax}°` : '—'}
                            </span>
                            </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default WeatherCard;