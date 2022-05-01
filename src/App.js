import { useState } from 'react';
import InputShortener from './components/InputShortener';
import LinkResult from './components/LinkResult';
import './css/App.css';

function App() {

  const [inputValue, setInputValue] = useState('')

  return (
    <div className="hero">
      <h1>BaxShortener</h1>
      <h3>Free URL Shortener</h3>
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
