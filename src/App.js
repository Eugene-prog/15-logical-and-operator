import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';


function App() {

  const[count, setCount]=useState(10);

  const incrementCount = () => setCount(count+1);
  const resetCount = () => setCount(0);

  const texts = ["Click me!", "Click me!", "Click me!", "Click me!", "Click me!"];
  const buttonStyle = {backgroundColor: "lightgreen"};

  return (
    <div className="App" >
      <Counter count={count}/>
      {texts.map((text,index) => {        
        return <Button onClick={incrementCount} key={index} text ={text}/>
      })}
      <div>
        <button style={buttonStyle} onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}

export default App;
