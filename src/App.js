import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/homepage/Homepage.js'
import Menu from './pages/navbar/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Menu />
      <div className="">
        <Homepage />
        {/* <Portfolio />
        <Work />
        <Testimonials />
        <Contact /> */}
      </div>
    </>
  );
}

export default App;
