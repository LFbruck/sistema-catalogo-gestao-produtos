import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';
import ProductDetail from './pages/ProductDetail';
import './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/novo" element={<ProductForm />} />
                    <Route path="/produtos/:id" element={<ProductDetail />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}