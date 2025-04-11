import '../css/SearchAutocomplete.css';
import { useState, useEffect } from 'react';

function SearchAutocomplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData = users && users.length 
                ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                : [];
                setFilteredUsers(filteredData);
                setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            console.log(data);
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoading(false);
                setError(null);
            }

        } catch(error) {
            console.log(error)
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchListOfUsers()
    }, []);

    console.log(users, filteredUsers);

    return (
        <div className="search-autocomplete-container">
            <input 
                value={searchParam}
                name="search-users"
                placeholder="Search users here..."
                onChange={handleChange}
            />

        </div>
    )
}

export default SearchAutocomplete;