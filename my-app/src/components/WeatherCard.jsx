import {Card, ListGroup} from 'react-bootstrap';

function WeatherCard({data}) {
    const {city, country, current, days} = data;

    return (
        <Card className="mx-auto text-start" style={{maxWidth: 520}}>
            <Card.Body>
                <Card.Title className="mb-2">
                    {city}, {country}
                </Card.Title>
                <Card.Subtitle className="mb-3" text-muted>
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