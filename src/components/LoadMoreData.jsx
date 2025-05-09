import '../css/LoadMoreData.css';
import { useState, useEffect } from 'react';

function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        let isCancelled = false;
        async function fetchProducts() {
            try {
                setLoading(true)
                const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
                    count === 0 ? 0 : count * 20}`);
    
                const result = await response.json();
    
                if (result && result.products && result.products.length && !isCancelled) {
                    setProducts((prevData) => [...prevData, ...result.products]);
                    setTotalProducts(result.total);
                    setLoading(false);
                }
            
            } catch(e) {
                console.log(e);
                setLoading(false);
            } 
        }
        fetchProducts();

        return () => {
            isCancelled = true;
        }
    }, [count])

    useEffect(() => {
        if (totalProducts !== 0) {
            if (products && products.length === totalProducts) setDisableButton(true);  
        }
    }, [products])

    if (loading) {
        return <div>Loading products...</div>
    }    

    return(
        <div className="load-more-data">
            <div className="product-container">
                {products && products.length 
                    ? products.map(item => (
                        <div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null
                }
            </div>
            <div className="load-more-button">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>
                    Load More Products
                </button>
                {
                    disableButton ? <p>You have displayed all the products</p> : null
                }
            </div>
        </div>
    )
}

export default LoadMoreData;