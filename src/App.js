import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index";
import Tuiter from "./components/tuiter/index";
import {BrowserRouter, Route, Routes}
    from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           element={<Labs/>}/>
                    <Route path="/tuiter"
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}



export default App;
