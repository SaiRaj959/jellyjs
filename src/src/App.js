import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import Home from './pages/Home';
import CoverLetter from "./pages/Coverletter";
import Repositories from "./pages/Repositories";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="/cover" element={<CoverLetter />}/>
        <Route path="/repositories" element={<Repositories />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/sairaj" element={<Resume />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
