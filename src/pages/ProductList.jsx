import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://dummyjson.com/products/search?q=apple')
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
    const excluirProduto = (id) => {
        fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setProducts(products.filter(product => product.id !== id));
            });
    };

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
                        <p>Preço: R$ {product.price}</p>
                        <Link to={`/novo/${product.id}`}>
                            <button>Editar</button>
                        </Link>
                        <button onClick={() => excluirProduto(product.id)}>Excluir</button>
                    </div>
                ))}
            </div>
        </div>
    );
}