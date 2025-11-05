import './App.css';
import Textinput from './components/Textinput';
import Dropdown from './components/Dropdown';
import OXbtn from './components/OXbtn';

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className='calculator'>
            <div className='text-inputs'>
              <Textinput></Textinput>
              <Textinput></Textinput>
              <Textinput></Textinput>
            </div>
            <div className='dropdown-inputs'>
              <Dropdown></Dropdown>
              <Dropdown></Dropdown>
              <Dropdown></Dropdown>
              <Dropdown></Dropdown>
            </div>
            <div className='ox-inputs'>
              <OXbtn></OXbtn>
              <OXbtn></OXbtn>
            </div>
            <button className='calculate-btn'>
              계산하기
            </button>
        </div>
      </main>
    </div>
  );
}

export default App;
