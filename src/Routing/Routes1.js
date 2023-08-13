/*import { Routes, Route } from 'react-router-dom';
import Home from '../Views/Home';
import Contact from '../Views/Contact';
import About from '../Views/About';
import Login from '../Views/Login';
import Register from '../Views/Register';
import MyCart from  '../Views/MyCart';


function Routing1() {
    const isAuthenticated = localStorage.getItem('uid') !== null && localStorage.getItem('uid') !== "";

    return (
        <Routes>
            {isAuthenticated ? (
                <>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Home />} />
                    <Route path="cart" element={<MyCart />} />
                    
                    

                </>
            ) : (
                <>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Login />} />
                </>
            )}
        </Routes>
    );
}

export default Routing1;
*/
import { Routes, Route } from 'react-router-dom';
import Home from '../Views/Home';
import Contact from '../Views/Contact';
import About from '../Views/About';
import Login from '../Views/Login';
import Register from '../Views/Register';
import MyCart from '../Views/MyCart';


// Make sure the component name starts with a capital letter

function Routing1() {
    const isAuthenticated = localStorage.getItem('uid') !== null && localStorage.getItem('uid') !== '';

    return (
        <Routes>
            {isAuthenticated ? (
                <>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<MyCart />} />
                   
                    <Route path="*" element={<Home />} />
                </>
            ) : (
                <>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Login />} />
                </>
            )}
        </Routes>
    );
}

export default Routing1;
