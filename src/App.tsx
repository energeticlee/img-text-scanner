import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { IimgArr } from "./Function/Interface";
import Footer from "./Pages/Components/Footer";
import Home from "./Pages/Home";
import Result from "./Pages/Result";

function App() {
  const [imgTextArr, setImgTextArr] = useState<IimgArr[] | []>([]);
  return (
    <div className="App">
      <Switch>
        <Route path="/result">
          <Result imgTextArr={imgTextArr} />
        </Route>
        <Route path={"/"}>
          <Home setImgTextArr={setImgTextArr} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
