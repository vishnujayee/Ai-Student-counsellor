import Filter from "./components/Filter";
import  './app.css';
function App() {
  return (
    <div className= "app">
    <Filter/>
    <div className="portal">
      <div className="search-bar"><input placeholder="search your carrer"/></div>
    </div>
    </div>
  );
}

export default App;
