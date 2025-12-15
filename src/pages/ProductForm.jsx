import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function ProductForm() {
    const { register, handleSubmit } = useForm();
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
                    <input type="text" {...register('titulo')} />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Preço:</label>
                    <input type="number" {...register('preco')} />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Descrição:</label>
                    <textarea {...register('descricao')}></textarea>
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
