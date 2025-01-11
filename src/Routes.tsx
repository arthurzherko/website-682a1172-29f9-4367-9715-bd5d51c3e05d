import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Equipment from './pages/Equipment';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/equipment" element={<Equipment />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/contact" element={<Contact />} />
  </RouterRoutes>
);
export default Routes;
