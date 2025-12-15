import { useParams } from 'react-router-dom';

export default  function ProductDetail() {
    const { id } = useParams();

    return (
        <div>
            <h2>Detalhes do Produto #{id}</h2>
        </div>
    );
}

