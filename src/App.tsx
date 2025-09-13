// src/App.tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { WorksPage } from './pages/Works';
import { StoriesPage } from './pages/Stories';
import { ContactPage } from './pages/Contact';
//import { NotFoundPage } from './pages/NotFound'; // Assure-toi de créer cette page

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
      
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
