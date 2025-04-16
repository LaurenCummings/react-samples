import UseFetch from '../components/UseFetch';

function Autoscroll() {
    const { data, error, pending } = UseFetch("https://dummyjson.com/products",{});

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