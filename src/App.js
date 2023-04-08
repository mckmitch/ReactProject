import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfoliosDirectoryPage from './pages/PortfoliosDirectoryPage';
import './App.css';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<PortfoliosDirectoryPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route
                    path='directory/:portfolioId'
                    element={<PortfolioDetailPage />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;