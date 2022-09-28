
import './App.css';
import { useState } from 'react';
const URL = 'https://api.exchangerate.host/latest';
const API_KEY = '911b3806a1cbe40dacf96b52c007b3f3';
        
function App() {
  const [euro, seteuro] = useState(0);
  const [gpd, setgpd] = useState(0);
  const [rate, setrate]= useState(0);
  
  async function convert(e)
{
  e.preventDefault();
  try{
    const address = URL + API_KEY;
    const response = await fetch(address);
    if (response.ok) {
      const json = await response.json();
      console.log(json.rates.GBP);
      setrate(json.rates.GBP);
      setgpd(euro * json.rates.GBP);
    } else {
      alert('Error retrieving exchange rate.');
      console.log(response);
    }
  } catch (err) {
    alert(err);
  }
}

  return(
    <div id="container">
      <form onSubmit={convert}>
        <div>
          <label>Euro</label>&nbsp;
          <input type="number" step="0.01"
          value={euro} onChange={e=> seteuro(e.target.value)}></input>
          <output> {rate}</output>
        </div>
        <div>
  <label>GPD</label>
  <output>{gpd.toFixed(2)}  £</output>
</div>
<div>
  <button>Calculate</button>
</div>
</form>
    </div>
  );
  

}

export default App;
