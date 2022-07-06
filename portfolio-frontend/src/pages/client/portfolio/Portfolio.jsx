import About from '../about/About';
import Accomplissement from '../accomplissement/Accomplissement';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Services from '../services/Services';
import SubServices from '../subServices/SubServices';
import Work from '../work/Work';
import './portfolio.scss';

const Portfolio = () => {
  return (
    <div className='portfolio-container'>    
      <Header />
      <Hero />
      <SubServices />
      <About />
      <Work />
      <Services />
      <Accomplissement />
      <Contact />
      <Footer />
    </div>
  )
}

export default Portfolio