import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Assoc from './components/logos/Assoc';
import Heading from './components/heading/Heading';
import Center from './components/center';
import Videopage from './components/videopage/Videopage';
import About from './components/about/About';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Solution from './components/solution/Solution';

function App() {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home imageUrl="https://eyeware.tech/wp-content/uploads/2020/07/homepage-header-min.jpg"/>
      <Center>
      </Center>
      <Assoc />
      <Heading title='About Us' desc='We are the research at High Performance Computing Lab' />
      <Heading title='Our Vision' desc='Smart Intelligent Bots for all' />
      <Solution />
    </main>
    
    <Footer/>
    <Scrollup/>
    </>
  );
}

export default App;
