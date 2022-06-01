import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/homepage/Homepage.js'
import Menu from './pages/navbar/Navbar.js'
import Work from './pages/work/work.js'
import Footer from './pages/footer/footer.js'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from './pages/about/About.js'

function App() {
  return (
    <>
      <Menu />
      <div>
        <Homepage />
        <Work />
        <Footer />


      </div>

      {/* <Router>

        <Routes>
          <Route exact path="/About" element={<About />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
