import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/homepage/Homepage.js'
import Menu from './pages/navbar/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './pages/work/work.js'
import Footer from './pages/footer/footer.js'
// import About from './pages/about/about.js'

function App() {
  return (
    <>
      <Menu />
      <div className="">
        <Homepage />
        <Work />
        <Footer />
        {/* <About />  this needs to be a ROUTE*/}
      </div>
    </>
  );
}

export default App;
