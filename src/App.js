
import './App.css';
import Gods from './components/Gods';
import Details from './components/Details';
import Home from './components/Home';

import Footer from './components/Footer'; //this is for a components file export import
import Student from './components/Student';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vishanu from './Godsfolder/Vishanu';
import Error from './components/Error';

import Main from './components/Main';
import Temple from './components/Temple';
import Dagadusheth from './Temples/Dagadusheth';
import SIddhivinayak from './Temples/SIddhivinayak';
import PaliTemple from './Temples/PaliTemple';
import Mahad from './Temples/Mahad';
import Ozar from './Temples/Ozar';
import Ranjangaon from './Temples/Ranjangaon';
import Lenyadri from './Temples/Lenyadri';
import Theur from './Temples/Theur';
import Morgaon from './Temples/Morgaon';
import Durga from './Aarti/Durga';
import MahaLaxmi from './Aarti/MahaLaxmi';
import Saibaba from './Aarti/Saibaba';
import Ganapati from './Aarti/Ganapati';
import Aarati2 from './Aarti/Aarati2';
import MHTemples from './components/MHTemples';
import Ashtavinayak from './components/Ashtavinayak';
import Ram from './Godsfolder/Ram';
import { useState } from 'react';
function App() {
  const [userPreference, setUserPreference] = useState('light'); // Assuming 'dark' is the default preference

  const handleToggle = () => {
    setUserPreference((prevState)=>(prevState === 'dark'? 'light':'dark'));
  };
  return (
    <div>
    <Router>
    <div className='welcome'> Wel-COME</div>
    <div className={`App ${userPreference}`}>
    <button onClick={handleToggle} className={`toggle-button ${userPreference}`}>
      {userPreference === 'dark'? 'dark':'light'}Color </button>

{/* <ul> */}
  {/* <li> */}
    <select className='lang'>
      <option value={"en"}>English</option>
      <option value={"fr"}>Francais</option>
      <option value={"es"}>Espa</option>
    </select>
  {/* </li> */}
{/* </ul> */}



     
     
    <Main/>
   
           <Routes>
           <Route path="/">
          <Route  path="/Home" element={<Home />}/>
            {/* <Route index element={<Home/>}/> */}
            </Route>
          <Route path="/Temple" element={<Temple/>}/>
         <Route path='MHTemples' element={<MHTemples/>}/>
         <Route index element={<MHTemples />}/>
         <Route path='Ashtavinayak' element={<Ashtavinayak/>}/>
         <Route path='Dagadusheth' element={<Dagadusheth/>}/>
         <Route path='SIddhivinayak'element={<SIddhivinayak/>}/>
         <Route path='PaliTemple'element={<PaliTemple/>}/>
         <Route path='Mahad'element={<Mahad/>}/>
         <Route path='Ozar'element={<Ozar/>}/>
         <Route path='Ranjangaon'element={<Ranjangaon/>}/>
         <Route path='Lenyadri'element={<Lenyadri/>}/>
         <Route path='Theur'element={<Theur/>}/>
        <Route path='Morgaon'element ={<Morgaon/>}/>
{/* ------------------------------------------------------------------------------- */}
           <Route path='/Gods' element={<Gods/>}/>
           <Route path ='Ram' element={<Ram/>}/>
           <Route index element={<Ram/>}/>
           <Route path ='Vishanu' element={<Vishanu/>}/>
{/* ---------------------------------------------------------------------------------------- */}


          <Route  path='/details' element={<Details/>}/>
          {/* <Route exact path='/' element={<Details/>}/> */}
          <Route path="/Aarati2" element={<Aarati2/>} />
          <Route path='/Ganapati' element={<Ganapati />}/>
          <Route path ='/Durga' element={<Durga/>}/>
          <Route path ='/MahaLaxmi' element={<MahaLaxmi/>}/>
          <Route path ='/Saibaba' element={<Saibaba/>}/>








          <Route path='/student' element={<Student/>}/> 
          <Route path ='*' element={<Error/>}/>


         </Routes>
       
      <Footer/>
   
    </div>
    </Router>
    </div>
  );
}

export default App;
