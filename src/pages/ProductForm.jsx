import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`https://dummyjson.com/products/${id}`)
                .then(response => response.json())
                .then(data => setProduct(data));
        }
    }, [id]);

    const onSubmit = (data) => {
        if (id) {
            fetch(`https://dummyjson.com/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: data.titulo,
                    price: data.preco,
                    description: data.descricao,
                    category: data.categoria
                })
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    navigate(`/produtos/${id}`);
                });
        } else {
            fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: data.titulo,
                    price: data.preco,
                    description: data.descricao,
                    category: data.categoria
                })
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    navigate('/');
                });
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>{id ? 'Editar Produto' : 'Cadastrar Novo Produto'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Título:</label>
                    <input
                        type="text"
                        defaultValue={product?.title}
                        {...register('titulo', { required: 'O título é obrigatório' })}
                    />
                    {errors.titulo && <p style={{ color: 'red' }}>{errors.titulo.message}</p>}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Preço:</label>
                    <input
                        type="number"
                        defaultValue={product?.price}
                        {...register('preco', { required: 'O preço é obrigatório' })}
                    />
                    {errors.preco && <p style={{ color: 'red' }}>{errors.preco.message}</p>}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Descrição:</label>
                    <textarea
                        defaultValue={product?.description}
                        {...register('descricao', { required: 'A descrição é obrigatória' })}
                    ></textarea>
                    {errors.descricao && <p style={{ color: 'red' }}>{errors.descricao.message}</p>}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Categoria:</label>
                    <input
                        type="text"
                        defaultValue={product?.category}
                        {...register('categoria')}
                    />
                </div>
                <button type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>
            </form>
        </div>
    );
}