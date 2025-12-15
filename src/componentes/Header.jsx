import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>Administrador E-Commerce</h1>
            <nav>
                <Link to="/">Lista de Produtos</Link>
                <span> | </span>
                <Link to="/novo">Adcionar Novo Produto</Link>
            </nav>
        </header>
    );
}