import useFetch from '../components/UseFetch';

function useFetchTest() {
    const {data, error, pending} = useFetch('https://dummyjson.com/products', {});

    console.log(error, data, pending);

    return (
        <div>
            <h1>Use Fetch Hook</h1>
        </div>
    )
}

export default useFetchTest;