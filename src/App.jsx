import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Data from './components/Data/Data';
import Table from './components/Table/Table';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Table />
      <Form />  
      <Footer />
    </>
  );
}

export default App;
