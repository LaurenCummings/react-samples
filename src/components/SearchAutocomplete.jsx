import '../css/SearchAutocomplete.css';
import { useState } from 'react';

function SearchAutocomplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            console.log(data);

        } catch(error) {
            console.log(error)
            setError(error);
        }
    }

    useEffect(() => {
        fetchListOfUsers()
    }, [users]);

    return (
        <div className="search-autocomplete-container">
            <input 
                name="search-users"
                placeholder="Search users here..."
            />

        </div>
    )
}

export default SearchAutocomplete;