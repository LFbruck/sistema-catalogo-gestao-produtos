import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function ProductForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: data.titulo,
                price: data.preco,
                description: data.descricao,
                category: data.categoria
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log('Produto cadastrado:', result);
                navigate('/');
            })
            .catch(error => {
                console.error('Erro ao cadastrar produto:', error);
            });
    };
    return (
        <div style={{ padding: '20px' }}>
            <h2>Cadastrar Novo Produto</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Título:</label>
                    <input
                        type="text"
                        {...register('titulo', { required: 'O título é obrigatório' })}
                    />
                    {errors.titulo && <p style={{ color: 'red' }}>{errors.titulo.message}</p>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Preço:</label>
                    <input
                        type="number"
                        {...register('preco', { required: 'O preço é obrigatório' })}
                    />
                    {errors.preco && <p style={{ color: 'red' }}>{errors.preco.message}</p>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Descrição:</label>
                    <textarea
                        {...register('descricao', { required: 'A descrição é obrigatória' })}
                    ></textarea>
                    {errors.descricao && <p style={{ color: 'red' }}>{errors.descricao.message}</p>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Categoria:</label>
                    <input type="text" {...register('categoria')} />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}