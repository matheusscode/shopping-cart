//R-Router-DOM
import { Routes, Route } from "react-router-dom";

//BootStrap
import { Container } from "react-bootstrap";

//Pages
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";

//Components
import { Navbar } from "./components/Navbar";

//Context
import { ShoppingCartProvider } from "./context/ShoppingCartContex";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
