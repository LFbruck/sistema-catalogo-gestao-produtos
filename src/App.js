import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h1>Sistema de Catálogo e Gestão de Produtos</h1>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/novo" element={<ProductForm />} />
                    <Route path="/produtos/:id" element={<ProductDetail />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;