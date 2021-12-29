import React from 'react'
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home /Home';
import { Equipo } from './Equipo/Equipo';
import { Footer } from './Footer/Footer';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ContactUs } from './Contacto/ContactUs';



export function App() {
    return (
        <>
 
            <Router>
                <Navbar/>
             
                <Routes>
                    <Route exact  path="/"           element={<Home/>} />
                    <Route exact  path="/Contacto"   element={<ContactUs/>} />
                    <Route exact  path="/Equipo"     element={<Equipo/>} />
                </Routes>

              <Footer/>
            </Router>
        
         
        </>
    )
}
