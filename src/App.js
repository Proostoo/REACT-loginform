import "./App.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path="/LoginForm" element={<LoginForm />} />
            <Route path="/RegisterForm" element={<RegisterForm />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
