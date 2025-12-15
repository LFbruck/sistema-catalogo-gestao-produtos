import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar produto:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div><h2>Carregando...</h2></div>;
    }

    if (!product) {
        return <div><h2>Produto não encontrado</h2></div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>{product.title}</h2>
            <p><strong>Preço:</strong> R$ {product.price}</p>
            <p><strong>Descrição:</strong> {product.description}</p>
            <div>
                <strong>Imagens:</strong>
                <div>
                    {product.images.map((img, index) => (
                        <img key={index} src={img} alt={product.title} style={{ width: '200px', margin: '10px' }} />
                    ))}
                </div>
            </div>
        </div>
    );
}
