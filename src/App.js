import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incCount, decCount, resetCount } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeCount);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>Increment/Decrement Counter</h1>
      <h2>{myState}</h2>
      <button onClick={() => dispatch(decCount())}>-</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
      <button onClick={() => dispatch(incCount())}>+</button>
    </div>
  );
}

export default App;
