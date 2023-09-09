import { useEffect } from "react";

import { 
 BrowserRouter,
 Routes,
 Router,
 Route,
 useLocation
} from 'react-router-dom'
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetail";
import Chekout from "./scenes/checkout/Checkout";
import Conformation from "./scenes/checkout/Conformation";
import Navbar from "./scenes/global/Navbar";
import CartMenu from "./scenes/global/CartMenu";
const ScrollToTop = () =>{
  const { pathname } = useLocation();

  useEffect(() =>{
    window.scrollTo(0,0);
  }, [pathname])

  return null;
}
function App() {
  return (
    <div className="App">
    <BrowserRouter >
   <Navbar />
     <ScrollToTop />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="item/:itemId" element={<ItemDetails />} />
      <Route path="checkout" element={<Chekout />} />
      <Route path="checkout/success" element={<Conformation />} />
     </Routes>
     <CartMenu />
    </BrowserRouter>
    </div>
  );
}

export default App;
