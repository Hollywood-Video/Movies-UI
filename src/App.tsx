import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation.tsx";
import { LandingPage } from "./Pages/LandingPage.tsx";
import { NotFoundPage } from "./Pages/NotFoundPage.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
