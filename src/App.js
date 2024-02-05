// import { Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  createBrowserRouter,  
} from "react-router-dom";
import "./App.css";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/RandomColor";
import Home from "./components/home/Home";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";
import QrCodeGen from "./components/qr-code-gen/QrCodeGen";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import CustomTabsTest from "./components/custom-tabs/CustomTabsTest";
import ModalTest from "./components/modal-popup/ModalTest";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";
import SearchAutoComplete from "./components/search-auto-complite/SearchAutoComplete";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import FeatureFlags from "./components/feature-flag/context/FeatureFlags";

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
              <li>
                <Link to="/imageslider">ImageSlider </Link>
              </li>      
              <li>
                <Link to="/loadmoredata">LoadMoreData </Link>
              </li>    
              <li>
                <Link to="/treeview">TreeView </Link>
              </li>  
              <li>
                <Link to="/qrcodegen">QrCodeGen </Link>
              </li>   
              <li>
                <Link to="/lightdarkmode">LightDarkMode </Link>
              </li>   
              <li>
                <Link to="/scrollindicator">ScrollIndicator </Link>
              </li> 
              <li>
                <Link to="/customtabs">CustomTabs </Link>
              </li>  
              <li>
                <Link to="/modal">Modal </Link>
              </li>    
              <li>
                <Link to="/githubprofilefinder">GithubProfileFinder </Link>
              </li>  
              <li>
                <Link to="/searchautocomplete">SearchAutoComplete </Link>
              </li>   
              <li>
                <Link to="/tictactoe">TicTacToe </Link>
              </li>  
              <li>
                <Link to="/featureflags">FeatureFlags </Link>
              </li>         
             
            </ul>
          </nav>
         
          
        <Routes >
        <Route path="/home" element={<Home />}  />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/randomcolor" element={<RandomColor />} />      
        <Route path="/starrating" element={<StarRating />} />      
        <Route path="/imageslider" element={<ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} />} />      
        <Route path ="loadmoredata" element={<LoadMoreData />} />
        <Route path ="treeview" element={<TreeView menus={menus} />} />
        <Route path ="qrcodegen" element={<QrCodeGen/> } />
        <Route path ="lightdarkmode" element={<LightDarkMode/> } />
        <Route path ="scrollindicator" element={<ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> } />
        <Route path ="customtabs" element={<CustomTabsTest/> } />
        <Route path ="modal" element={<ModalTest/> } />
        <Route path ="githubprofilefinder" element={<GithubProfileFinder/> } />
        <Route path ="searchautocomplete" element={<SearchAutoComplete/> } />
        <Route path ="tictactoe" element={<TicTacToe/> } />
        <Route path ="featureflags" element={<FeatureFlags/> } />
        </Routes>
        </BrowserRouter>        
        </main>
    </div>
  );
}

export default App;
