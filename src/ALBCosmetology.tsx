import { Route, Routes } from 'react-router-dom';
import PageLayout from './components/utils/PageLayout.tsx';
import { Home } from './pages/Home.tsx';
import { Portfolio } from './pages/Portfolio.tsx';
import { Contact } from './pages/Contact.tsx';
import { Services } from './pages/Services.tsx';
import { Pricing } from './pages/Pricing.tsx';

export const ALBCosmetology = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </PageLayout>
  );
};
