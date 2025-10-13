import {useState} from 'react';
import {Form, Button, InputGroup} from 'react-bootstrap';

function SearchBar({onSearch}) {
    const [city, setCity] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;
        console.log("Search city: ", city);
        onSearch(city);
        setCity('');
    };
    return (
        <Form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
            <InputGroup style={{maxWidth: '400px'}}>
                <Form.Control
                    type="text"
                    placeholder="Enter your city!"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <Button type="submit" variant="primary">Search</Button>
            </InputGroup>
        </Form>
    );
}
export default SearchBar;