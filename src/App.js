import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from './components/header';
import './App.scss';

import Home from './pages/Home';
import CoverLetter from "./pages/Coverletter";
import Repositories from "./pages/Repositories";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="/cover" element={<CoverLetter />}/>
        <Route path="/repositories" element={<Repositories />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
