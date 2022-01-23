import "bootstrap/scss/bootstrap.scss"
import './App.scss';
import Header from "./components/Header/Header";
import ContentContainer from "./components/ContentContainer/ContentContainer";

function App() {
    return (
        <div className="App">
            <Header />
            <ContentContainer />
        </div>
    );
}

export default App;