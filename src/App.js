import './App.css';
import Blog from './components/Blog';
import Client from './components/Client';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NewArrival from './components/NewArrival';
import NewsLetter from './components/NewsLetter';
import PopularProducts from './components/PopularProducts';
import SofaCollection from './components/SofaCollection';

function App() {
  return (
    <div className="App">
      <Hero />
      <PopularProducts />
      <NewArrival />
      <SofaCollection />
      <Feature />
      <Blog />
      <Client />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
