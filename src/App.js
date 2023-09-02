import Header from "./components/Header/Header";
import CountryList from "./components/Main/CountryList";
import CountryModal from "./components/Main/CountryModal";


function App() {
    return(
        <div className='app'>
            <Header/>
            <CountryModal/>
            <CountryList/>
           
        </div>
    ) 
}

export default App;
