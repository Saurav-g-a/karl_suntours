import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Filter from './Filter/Filter';
import Routers from './router/router';
function App() {
  return (
    < >
      <Header/>
      {/* <Home/> */}
     <Routers/>
      <Footer/>
    </>
  );
}

export default App;
