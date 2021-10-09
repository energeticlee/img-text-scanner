import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { IimgArr } from "./Function/Interface";
import Home from "./Pages/Home";
import Result from "./Pages/Result";

function App() {
  const [imgTextArr, setImgTextArr] = useState<IimgArr[] | []>([]);
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/result">
            <Result imgTextArr={imgTextArr} />
          </Route>
          <Route path={"/"}>
            <Home setImgTextArr={setImgTextArr} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
