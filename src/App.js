// import { Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  Link,  
} from "react-router-dom";
import "./App.css";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/RandomColor";
import Home from "./components/home/Home";
import StarRating from "./components/star-rating/StarRating";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/accordian",
  //     element: <Accordian />,
  //   },
  //   {
  //     path: "/randomColor",
  //     element: <RandomColor />,
  //   },
  //   {
    
  //   },
  // ]);
  return (
    <div className="app">            
        <main className="nav">
        <BrowserRouter>
          <nav>
            <ul>
            <li>                
                <Link to="/home">Home </Link>
              </li>
              <li>                
                <Link to="/accordian">Accordian </Link>
              </li>
              <li>
                <Link to="/randomcolor">Randomcolor </Link>
              </li>   
              <li>
                <Link to="/starrating">StarRating </Link>
              </li>            
            </ul>
          </nav>
         
          
        <Routes >
        <Route path="/home" element={<Home />}  />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/randomcolor" element={<RandomColor />} />      
        <Route path="/starrating" element={<StarRating />} />      
        
        </Routes>
        </BrowserRouter>
        </main>
    </div>
  );
}

export default App;
