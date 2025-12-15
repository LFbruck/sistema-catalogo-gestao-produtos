import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>Dummy E-Commerce Admin</h1>
            <nav>
                <Link to="/">Lista de Produtos</Link>
                <span> | </span>
                <Link to="/novo">Novo Produto</Link>
            </nav>
        </header>
    );
}