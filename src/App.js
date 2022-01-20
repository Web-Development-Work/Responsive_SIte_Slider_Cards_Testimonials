import './App.css';
import Ffour from './components/Footer/Ffour';
import Fone from './components/Footer/Fone';
import Fthree from './components/Footer/Fthree';
import Ftwo from './components/Footer/Ftwo';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Testimonial from './components/Home/Testimonial';
import Tmone from './components/Home/Tmone';
import Tmtwo from './components/Home/Tmtwo';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
        <Header/>
        <Slider/>
        <Home/>
        {/* <Testimonial/> */}
        <Tmone/>
        <Tmtwo/>
        <Fone/>
        <Ftwo/>
        <Fthree/>
        <Ffour/>
    </div>
  );
}

export default App;
