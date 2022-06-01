import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/homepage/Homepage.js'
import Menu from './pages/navbar/Navbar.js'
import Work from './pages/work/work.js'
import Footer from './pages/footer/footer.js'


function App() {
  return (
    <>
      <Menu />
      <div>
        <Homepage />
        <Work />
        <Footer />


      </div>

    </>
  );
}

export default App;
