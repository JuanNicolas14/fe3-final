import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import { useContextGlobal } from './Components/utils/global.context';


function App() {

  const {themeState} = useContextGlobal()

  return (
      <div className="App"
      style={{width: '100vw',backgroundColor: themeState.bgColor, color: themeState.color}}
      >
          <Navbar/>
          <Routes>
            <Route path='/' element={<Navigate to='/home' replace />}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/dentist/:id'element={<Detail/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
