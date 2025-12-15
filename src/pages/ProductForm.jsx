import { useForm } from 'react-hook-form';

export default function ProductForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
