import '../css/LoadMoreData.css';
import { useState, useEffect } from 'react';

function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
                count === 0 ? 0 : count * 20}`);

            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts(result.products);
                setLoading(false);
            }

            console.log(result);
        
        } catch(e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    },[])

    if (loading) {
        return <div>Loading products...</div>
    }    

    return(
        <div className="load-more-data">
            <div className="product-container">
                {products && products.length 
                    ? products.map(item => (
                        <div className="product" key={item.id}>
                            <img src={img.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null
                }
            </div>
            <div className="load-more-button">
                <button>Load More Products</button>
            </div>
        </div>
    )
}

export default LoadMoreData;