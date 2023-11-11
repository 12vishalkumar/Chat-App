//-------------------------- Importing required libaries --------------------------//
import InputArea from './Components/InputArea/InputArea';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


//------------------------- App function -----------------------------------------//
function App() {
  return (
    <div className="App">
      <NavBar />
      <InputArea />
    </div>
  );
}

//------------------------- default export function ---------------------------//
export default App;