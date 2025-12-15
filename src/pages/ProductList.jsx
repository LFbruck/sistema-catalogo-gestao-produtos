import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar produtos:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div><h2>Carregando Produtos...</h2></div>;
    }
    return (
        <div>
            <h2>Lista de Produtos</h2>
            <div>
                {products.map(product => (
                    <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                        <img src={product.thumbnail} alt={product.title} style={{ width: '100px' }} />
                        <h3>
                            <Link to={`/produtos/${product.id}`}>{product.title}</Link>
                        </h3>
                        <p>Preço: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}