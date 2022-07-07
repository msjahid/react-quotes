import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Contact from "./Contact";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {


  return (
      <Router>
          <div className="App">
              <Navbar />
              <div className="content">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/Create" element={<Create />} />
                      <Route path="/blogs/:id" element={<BlogDetails />} />
                      <Route path="/Contact" element={<Contact />} />
                      <Route path="*" element={<NotFound />} />
                  </Routes>
              </div>
          </div>
      </Router>
  );
}

export default App;