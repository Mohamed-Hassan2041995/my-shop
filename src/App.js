import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FirstSection from './Components/MainContent/FirstSection';
import SecondSection from './Components/MainContent/SecondSection';
import ThirdSection from './Components/MainContent/ThirdSection';
import SectionNine from './Components/MainContent/SectionNine';
import SectionEight from './Components/MainContent/SectionEight';
import SectionSeven from './Components/MainContent/SectionSeven';
import SectionSix from './Components/MainContent/SectionSix';
import SectionFive from './Components/MainContent/SectionFive';
import SectionFour from './Components/MainContent/SectionFour';
import Nav from './Components/layout/Nav';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />

      <FirstSection />
      <SecondSection/>
      <ThirdSection />
      <SectionFour  />
      <SectionFive/>
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <Footer />
    </div>
  );
}

export default App;
