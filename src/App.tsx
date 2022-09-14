import Header from './components/Header/';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import Biography from './components/Biography/Biography';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Hero />
      <Biography />
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
