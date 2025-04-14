import { useState } from 'react';

function useFetch(url, options= {}) {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    return (
        <div>

        </div>
    )
}

export default useFetch;