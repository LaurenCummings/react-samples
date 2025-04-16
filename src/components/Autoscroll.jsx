import UseFetch from '../components/UseFetch';

function Autoscroll() {
    const { data, error, pending } = UseFetch("https://dummyjson.com/products",{});

    if (error) {
        return <h1>Error occurred ! Please try again.</h1>
    }

    if (pending) {
        return <h1>Loading ! Please wait</h1>
    }

    return (
        <div>
            <h1>Scroll to Top and Bottom Feature</h1>
            <h3>This is the top section</h3>
            <button>Scroll to Bottom</button>
            <ul>
                {
                    data && data.products && data.products.length 
                        ? data.products.map((item) => <li key={item.id}>{item.title}</li>) 
                        : null
                }
            </ul>
        </div>
    )
}

export default Autoscroll;