import '../css/GithubProfileFinder.css';
import { useState, useEffect } from 'react';

function GithubProfileFinder() {
    const [userName, setUserName] = useState('sangammukherjee');

    async function fetchGithubUserData() {
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json();

        console.log(data);
    }
    
    function handleSubmit() {

    }

    useEffect(() => {
        fetchGithubUserData()
    },[])

    return (
        <div className="github-profile-container">
            <div className="github-profile-input-wrapper">
                <input 
                    name="search-by-username"
                    type="text"
                    placeholder="Search Github Username..."
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
        </div>
    )
}

export default GithubProfileFinder;