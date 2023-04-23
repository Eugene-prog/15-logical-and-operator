import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';


function App() {

  const[count, setCount]=useState(10);

  const incrementCount = () => setCount(count+1)

  const texts = ["Click", "Click me", "Push me", "Touch me", "Click me again!"];

  return (
    <div className="App" >
      <Counter count={count}/>
      {texts.map((text,index) => {        
        return <Button onClick={incrementCount} key={index} text ={text}/>
      })}
    </div>
  );
}

export default App;
