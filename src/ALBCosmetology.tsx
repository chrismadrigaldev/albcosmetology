import { Route, Routes } from 'react-router-dom';
import PageLayout from './components/utils/PageLayout.tsx';
import { Home } from './pages/Home.tsx';

export const ALBCosmetology = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </PageLayout>
  );
};
