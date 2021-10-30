
import './App.css';
import Cities from './components/Cities';
import CurrentWeather from './components/CurrentWeather';
import Footer from './components/Footer';
import { CityProvider } from './context/CityContext';



function App() {
  
  
  

  return (
    <CityProvider>
      <div className="mt-5 sm:mt-32">
      <Cities></Cities>
      <CurrentWeather></CurrentWeather>
      </div>
      <Footer></Footer>
    </CityProvider>
  );
}

export default App;
