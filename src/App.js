import logo from './logo.svg';
import './App.css';
import SideMenu from './Components/Navigation';
import PageContent from './Components/PageContent';
import Breadcrmb from './Components/Breadcrumb';


function App() {
  return (
  
    <div className="App">
      
        <div className="SideMenuAndPageContent">
              <SideMenu/>
              {/* <Breadcrmb/> */}
            <div className="container-fluid">
               <PageContent/>
            </div>
        </div>
    </div>

  );
}

export default App;
